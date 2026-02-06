
export const generateVCard = (data: any) => {
  const vCardLines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${data.name}`,
    `ORG:${data.company}`,
    `TITLE:${data.title}`,
    `TEL;TYPE=WORK,VOICE:${data.phone}`,
    `EMAIL;TYPE=WORK,INTERNET:${data.email}`,
    `URL:${data.links.main}`,
    `NOTE:PA License #${data.license} - ${data.tagline}`,
    'END:VCARD'
  ];

  return vCardLines.join('\n');
};
