import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ─── Brand HTML Email Template Helper ──────────────────────────────────────
function ownerEmailHtml({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Inquiry — Housen & Co.</title>
</head>
<body style="margin:0;padding:0;background:#E5DFD3;font-family:'Georgia',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#E5DFD3;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#FAF8F4;border-radius:4px;overflow:hidden;box-shadow:0 4px 24px rgba(58,50,44,0.08);">
          <!-- Header -->
          <tr>
            <td style="background:#3A322C;padding:36px 48px;text-align:center;">
              <div style="font-family:'Georgia',serif;font-size:22px;letter-spacing:0.2em;color:#E5DFD3;font-weight:400;">HOUSEN &amp; CO.</div>
              <div style="font-size:10px;letter-spacing:0.4em;color:#A67C3D;text-transform:uppercase;margin-top:6px;">Interior &amp; Architecture Studio</div>
            </td>
          </tr>
          <!-- Label -->
          <tr>
            <td style="padding:36px 48px 0 48px;">
              <div style="font-size:10px;letter-spacing:0.3em;color:#A67C3D;text-transform:uppercase;margin-bottom:12px;">New Inquiry Received</div>
              <hr style="border:none;border-top:1px solid #E5DFD3;margin:0 0 28px 0;" />
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:0 48px 36px 48px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:10px 0;">
                    <div style="font-size:10px;letter-spacing:0.2em;color:#1E2430;opacity:.5;text-transform:uppercase;margin-bottom:4px;">Name</div>
                    <div style="font-size:16px;color:#1E2430;">${name}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;">
                    <div style="font-size:10px;letter-spacing:0.2em;color:#1E2430;opacity:.5;text-transform:uppercase;margin-bottom:4px;">Email</div>
                    <div style="font-size:16px;color:#1E2430;"><a href="mailto:${email}" style="color:#A67C3D;text-decoration:none;">${email}</a></div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;">
                    <div style="font-size:10px;letter-spacing:0.2em;color:#1E2430;opacity:.5;text-transform:uppercase;margin-bottom:8px;">Message</div>
                    <div style="font-size:15px;color:#1E2430;line-height:1.8;background:#E5DFD3;padding:18px;border-radius:4px;">${message.replace(/\n/g, "<br/>")}</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background:#3A322C;padding:20px 48px;text-align:center;">
              <div style="font-size:10px;letter-spacing:0.25em;color:#A67C3D;text-transform:uppercase;">Housen &amp; Co. Studio · Charleston, SC</div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function clientAutoReplyHtml({ name }: { name: string }) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Thank You — Housen & Co.</title>
</head>
<body style="margin:0;padding:0;background:#E5DFD3;font-family:'Georgia',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#E5DFD3;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#FAF8F4;border-radius:4px;overflow:hidden;box-shadow:0 4px 24px rgba(58,50,44,0.08);">
          <!-- Header with logo area -->
          <tr>
            <td style="background:#3A322C;padding:40px 48px 36px 48px;text-align:center;">
              <!-- Monogram logo in HTML -->
              <div style="display:inline-block;border:1.5px solid #A67C3D;padding:10px 18px;margin-bottom:16px;">
                <span style="font-family:'Georgia',serif;font-size:18px;letter-spacing:0.35em;color:#E5DFD3;">H&amp;C</span>
              </div>
              <div style="font-family:'Georgia',serif;font-size:22px;letter-spacing:0.2em;color:#E5DFD3;font-weight:400;">HOUSEN &amp; CO.</div>
              <div style="font-size:10px;letter-spacing:0.4em;color:#A67C3D;text-transform:uppercase;margin-top:6px;">Interior &amp; Architecture Studio</div>
            </td>
          </tr>
          <!-- Greeting -->
          <tr>
            <td style="padding:44px 48px 0 48px;text-align:center;">
              <div style="font-size:10px;letter-spacing:0.3em;color:#A67C3D;text-transform:uppercase;margin-bottom:16px;">Thank You</div>
              <div style="font-family:'Georgia',serif;font-size:28px;color:#1E2430;font-weight:400;line-height:1.3;">Dear ${name},</div>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:24px 48px 36px 48px;text-align:center;">
              <hr style="border:none;border-top:1px solid #E5DFD3;margin:0 0 24px 0;" />
              <p style="font-size:15px;color:#1E2430;line-height:1.9;margin:0 0 16px 0;opacity:.85;">
                We have received your inquiry and are delighted by your interest in Housen &amp; Co.
              </p>
              <p style="font-size:15px;color:#1E2430;line-height:1.9;margin:0 0 28px 0;opacity:.85;">
                Our team will review your message and get back to you within <strong>two business days</strong> to schedule an introductory conversation about your project.
              </p>
              <div style="background:#3A322C;display:inline-block;padding:14px 36px;border-radius:2px;">
                <span style="font-size:11px;letter-spacing:0.25em;color:#E5DFD3;text-transform:uppercase;">We look forward to speaking with you.</span>
              </div>
            </td>
          </tr>
          <!-- Divider with quote -->
          <tr>
            <td style="padding:0 48px 36px 48px;text-align:center;">
              <hr style="border:none;border-top:1px solid #E5DFD3;margin:24px 0;" />
              <p style="font-family:'Georgia',serif;font-size:13px;font-style:italic;color:#1E2430;opacity:.5;margin:0;">
                &ldquo;Every considered space begins with a single conversation.&rdquo;
              </p>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background:#3A322C;padding:20px 48px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="text-align:center;">
                    <div style="font-size:10px;letter-spacing:0.25em;color:#A67C3D;text-transform:uppercase;margin-bottom:6px;">Housen &amp; Co. · 412 Bellwood Lane, Charleston, SC</div>
                    <div style="font-size:10px;color:#E5DFD3;opacity:.5;">hello@housenandco.com &nbsp;·&nbsp; +1 (843) 555-0192</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ─── API Handler ────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 1. Email to studio owner
    await transporter.sendMail({
      from: `"${process.env.SMTP_FROM_NAME || "Housen & Co."}" <${process.env.SMTP_USER}>`,
      to: process.env.INQUIRY_TO,
      subject: `New Inquiry from ${name} — Housen & Co.`,
      html: ownerEmailHtml({ name, email, message }),
    });

    // 2. Auto-reply to client
    await transporter.sendMail({
      from: `"${process.env.SMTP_FROM_NAME || "Housen & Co."}" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Thank you for reaching out — Housen & Co.`,
      html: clientAutoReplyHtml({ name }),
    });

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error("Email error:", err);
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
