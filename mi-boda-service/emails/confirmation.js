const ConfirmationEmail = ({ name }) => {
  const eventDetails = {
    text: "Boda de Jonatan y Rosa",
    startDate: "20250531T173000Z",
    endDate: "20250531T230000Z",
    details:
      "✨ ¡NOS CASAMOS! ✨\n\n🕊️ CEREMONIA: 19:30h\n🥂 CELEBRACIÓN: 20:30h",
    location:
      "Caseron de Araceli, C. del Olivar, 8, San Agustin del Guadalix, Madrid",
  };

  const googleCalendarLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    eventDetails.text
  )}&dates=${eventDetails.startDate}/${
    eventDetails.endDate
  }&details=${encodeURIComponent(
    eventDetails.details
  )}&location=${encodeURIComponent(eventDetails.location)}`;

  const appleCalendarLink =
    encodeURI(`data:text/calendar;charset=utf8,BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${eventDetails.startDate}
DTEND:${eventDetails.endDate}
SUMMARY:${eventDetails.text}
DESCRIPTION:${eventDetails.details}
LOCATION:${eventDetails.location}
STATUS:CONFIRMED
SEQUENCE:0
END:VEVENT
END:VCALENDAR`);

  return `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Confirmación de Asistencia - Boda de Jonatan y Rosa</title>
      </head>
      <body style="
        background-color: #f8f7f5;
        font-family: 'Playfair Display', Georgia, serif;
        margin: 0;
        padding: 0;
      ">
        <table align="center" role="presentation" cellSpacing="0" cellPadding="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <tr>
            <td align="center" style="padding: 0 0 20px 0;">
              <img src="https://boda-jon.s3.eu-central-1.amazonaws.com/1-9.jpg" alt="Jonatan y Rosa" style="max-width: 100%; height: auto; border-radius: 8px; margin-bottom: 20px;" />
            </td>
          </tr>
          <tr style="width: 100%">
            <td>
              <table style="padding: 30px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);" align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%">
                <tr>
                  <td>
                    <h1 style="color: #1c1c1c; font-size: 28px; font-weight: 600; text-align: center; margin: 30px 0; font-family: 'Playfair Display', Georgia, serif;">
                      ¡Gracias por confirmar tu asistencia, ${name}!
                    </h1>
                    <p style="font-size: 16px; line-height: 24px; margin: 16px 0; text-align: center; color: #4a4a4a;">
                      Nos hace mucha ilusión que nos acompañes en este día tan especial.
                    </p>
                    <div style="text-align: center; margin: 30px 0;">
                      <p style="font-size: 18px; line-height: 24px; margin: 8px 0; color: #1c1c1c; font-weight: 600;">
                        31 de Mayo de 2025
                      </p>
                      <p style="font-size: 16px; line-height: 24px; margin: 8px 0; color: #4a4a4a;">
                        🕊️ CEREMONIA: 19:30h<br>
                        🥂 CELEBRACIÓN: 20:30h
                      </p>
                      <p style="font-size: 16px; line-height: 24px; margin: 8px 0; color: #4a4a4a;">
                        Caserón de Araceli<br>
                        C. del Olivar, 8, San Agustín del Guadalix, Madrid
                      </p>
                    </div>
                    <div style="text-align: center; margin: 30px 0;">
                      <table role="presentation" cellSpacing="0" cellPadding="0" border="0" style="margin: 0 auto;">
                        <tr>
                          <td style="padding: 0 10px;">
                            <a href="${googleCalendarLink}" 
                               target="_blank"
                               style="
                                 background-color: #1c1c1c;
                                 color: #ffffff;
                                 padding: 12px 24px;
                                 text-decoration: none;
                                 border-radius: 4px;
                                 font-size: 16px;
                                 display: inline-block;
                                 margin-bottom: 10px;
                               "
                            >
                              📅 Google Calendar
                            </a>
                          </td>
                          <td style="padding: 0 10px;">
                            <a href="${appleCalendarLink}" 
                               download="Boda_Jonatan_y_Rosa.ics"
                               style="
                                 background-color: #1c1c1c;
                                 color: #ffffff;
                                 padding: 12px 24px;
                                 text-decoration: none;
                                 border-radius: 4px;
                                 font-size: 16px;
                                 display: inline-block;
                                 margin-bottom: 10px;
                               "
                            >
                              📱 Apple Calendar
                            </a>
                          </td>
                        </tr>
                      </table>
                    </div>
                    <p style="font-size: 16px; line-height: 24px; margin: 24px 0 16px 0; text-align: center; color: #4a4a4a; font-style: italic;">
                      Con cariño,<br>
                      Jonatan y Rosa
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `.trim();
};

module.exports = ConfirmationEmail;
