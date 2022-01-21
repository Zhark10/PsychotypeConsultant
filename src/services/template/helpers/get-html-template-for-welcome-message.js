export const getHtmlTemplateForWelcomeMessage = (message) => {
  const colors = {
    primary: '#000000',
    secondary: '#ffff00'
  }
  return `
    <body style="
      margin: 0; 
      width: 360; 
      height: 96;
      background-color: ${colors.secondary};
      font-family: Courier New;
    ">
      <div style=" 
        display: flex; 
        align-items: center; 
        padding: 8px;
        height: 96;
        font-size: 16px;
        color: ${colors.primary};
        text-align: center;
      ">
          ${message}
      </div>
    </body>`
}