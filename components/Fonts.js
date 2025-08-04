import { Global } from "@emotion/react";

const Fonts = () => {
  return (
    <Global
      styles={`
         @import url('https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;700&display=swap');
      `}
    />
  );
};

export default Fonts;
