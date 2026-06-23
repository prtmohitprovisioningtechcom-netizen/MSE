import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Membership from '@/models/Membership';
import User from '@/models/User';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const membershipId = searchParams.get('membershipId');

    if (!membershipId) {
      return new NextResponse('Membership ID is required', { status: 400 });
    }

    await dbConnect();
    
    // Fetch membership application and populate user
    const membership = await Membership.findById(membershipId).populate('user');
    
    if (!membership) {
      return new NextResponse('Membership record not found', { status: 404 });
    }

    if (membership.status !== 'Approved') {
      return new NextResponse('Membership is not approved yet', { status: 400 });
    }

    const companyName = membership.companyName;
    const membershipType = membership.type;
    const dateOfApproval = membership.approvedAt 
      ? new Date(membership.approvedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
      : new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
    const memberId = `MSE-${membership._id.toString().slice(18).toUpperCase()}`;

    // Elegant certificate HTML template
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>MSECCIA Membership Certificate - ${companyName}</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;800&family=Montserrat:wght@400;500;600;700&display=swap');
          
          body {
            background-color: #f1f5f9;
            margin: 0;
            padding: 40px;
            font-family: 'Montserrat', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 90vh;
          }
          
          .certificate-container {
            width: 840px;
            height: 590px;
            background-color: #ffffff;
            border: 20px solid #0A2F6B;
            position: relative;
            padding: 40px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.1);
            box-sizing: border-box;
            background-image: radial-gradient(circle at center, #ffffff 60%, #f8fafc 100%);
          }
          
          /* Tricolor Top Line */
          .tricolor-accent {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 6px;
            background: linear-gradient(to right, #FF9933 33.3%, #ffffff 33.3%, #ffffff 66.6%, #138808 66.6%);
          }

          /* Inner Border */
          .inner-border {
            border: 2px solid #FF9933;
            height: 100%;
            width: 100%;
            box-sizing: border-box;
            padding: 30px;
            display: flex;
            flex-col: column;
            flex-direction: column;
            align-items: center;
            text-align: center;
            justify-content: space-between;
          }

          /* Branding Header */
          .header {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4px;
          }
          
          .header h1 {
            font-family: 'Cinzel', serif;
            color: #0A2F6B;
            font-size: 22px;
            margin: 0;
            font-weight: 800;
            letter-spacing: 1.5px;
          }
          
          .header p {
            margin: 0;
            font-size: 10px;
            color: #FF9933;
            text-transform: uppercase;
            letter-spacing: 2.5px;
            font-weight: 700;
          }

          .header .tagline {
            color: #138808;
            font-size: 9px;
            font-style: italic;
            text-transform: none;
            letter-spacing: 1px;
            margin-top: 2px;
          }

          /* Title of Document */
          .doc-title {
            font-family: 'Cinzel', serif;
            color: #0A2F6B;
            font-size: 32px;
            font-weight: 700;
            margin: 15px 0 5px 0;
            letter-spacing: 2px;
            border-bottom: 2px solid #FF9933;
            padding-bottom: 5px;
          }

          .certify-text {
            font-size: 13px;
            color: #64748b;
            margin: 0;
            font-style: italic;
          }

          /* Main Subject */
          .recipient-name {
            font-size: 24px;
            color: #0A2F6B;
            font-weight: 700;
            margin: 8px 0;
            border-bottom: 1px dashed #cbd5e1;
            padding-bottom: 4px;
            max-width: 90%;
          }

          .purpose-text {
            font-size: 12px;
            color: #475569;
            line-height: 1.6;
            margin: 0;
            max-width: 85%;
          }

          /* Footer metadata & signatures */
          .footer-section {
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: flex-end;
            margin-top: 15px;
          }

          .metadata-box {
            text-align: left;
            font-size: 11px;
            color: #475569;
            display: flex;
            flex-direction: column;
            gap: 4px;
          }
          
          .metadata-box strong {
            color: #0A2F6B;
          }

          .signatures {
            display: flex;
            gap: 40px;
          }

          .sig-block {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 10px;
            color: #64748b;
          }

          .sig-line {
            width: 120px;
            border-top: 1px solid #94a3b8;
            margin-top: 30px;
            padding-top: 4px;
            font-weight: 600;
            color: #0A2F6B;
            text-align: center;
          }

          /* Print Override styling */
          @media print {
            body {
              background-color: #ffffff;
              padding: 0;
              margin: 0;
            }
            .certificate-container {
              box-shadow: none;
              border: 20px solid #0A2F6B;
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
            }
          }
        </style>
        <script>
          window.onload = function() {
            setTimeout(function() {
              window.print();
            }, 800);
          }
        </script>
      </head>
      <body>
        <div class="certificate-container">
          <div class="tricolor-accent"></div>
          <div class="inner-border">
            
            <div class="header">
              <h1>MSE Chamber of Commerce & Industry Association</h1>
              <p>Partners In Growth, Nation In Progress</p>
              <div class="tagline">सशक्त एमएसएमई, समृद्ध भारत</div>
            </div>

            <div class="doc-title">Certificate of Membership</div>

            <p className="certify-text">This is to certify that</p>
            <div class="recipient-name">${companyName}</div>

            <p class="purpose-text">
              is registered as an active and recognized corporate member under the <strong>${membershipType} Division</strong> of the MSE Chamber of Commerce & Industry Association. The entity is entitled to all rights, facilitation support, vendor networks, and mediation privileges of the association.
            </p>

            <div class="footer-section">
              <div class="metadata-box">
                <div><strong>Member ID:</strong> ${memberId}</div>
                <div><strong>Category:</strong> ${membershipType} Member</div>
                <div><strong>Approved On:</strong> ${dateOfApproval}</div>
              </div>

              <div class="signatures">
                <div class="sig-block">
                  <div style="font-family: 'Cinzel', serif; font-weight: bold; color: #0A2F6B; font-style: italic;">Ramesh Kumar</div>
                  <div class="sig-line">President</div>
                </div>
                <div class="sig-block">
                  <div style="font-family: 'Cinzel', serif; font-weight: bold; color: #0A2F6B; font-style: italic;">S. M. Patel</div>
                  <div class="sig-line">Director General</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </body>
      </html>
    `;

    return new NextResponse(html, {
      headers: {
        'Content-Type': 'text/html',
      },
    });
  } catch (error: any) {
    console.error('Error generating certificate:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
