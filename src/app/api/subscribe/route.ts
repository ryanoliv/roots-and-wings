// src/app/api/subscribe/route.ts
import { NextRequest, NextResponse } from "next/server";

// Correctly exporting POST as a named export
export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email, token } = body;

  const reCAPTCHAValidationResponse = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    {
      method: "POST",
    }
  );
  const reCAPTCHAValidationData = await reCAPTCHAValidationResponse.json();

  if (!reCAPTCHAValidationData.success) {
    return new Response(
      JSON.stringify({ message: "reCAPTCHA verification failed." }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  if (request.method !== "POST") {
    return new Response(JSON.stringify({ message: "Method Not Allowed" }), {
      status: 405,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  // const { email } = await request.json();

  if (!email || !email.includes("@")) {
    return new Response(JSON.stringify({ message: "Email is invalid" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
  const DATACENTER = API_KEY?.split("-")[1];
  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

  const data = {
    email_address: email,
    status: "subscribed",
  };

  try {
    const mcResponse = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`anystring:${API_KEY}`).toString(
          "base64"
        )}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!mcResponse.ok) {
      const errorData = await mcResponse.json();
      console.error("Mailchimp API error: ", errorData);
      return new Response(
        JSON.stringify({
          message: errorData.title || "Something went wrong with Mailchimp API",
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    return new Response(
      JSON.stringify({ message: "Subscribed successfully" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error subscribing to Mailchimp: ", error);
    return new Response(
      JSON.stringify({ message: "An error occurred during subscription." }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
