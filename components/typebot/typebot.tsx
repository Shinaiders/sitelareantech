import { Bubble } from "@typebot.io/nextjs";

export function TypebotComponents() {
  return (
    <Bubble
      apiHost="https://viewer.macshinaider.cloud"
      typebot="larean"
      previewMessage={{
        message: "Precisa de Ajuda?",
        autoShowDelay: 10000,
        avatarUrl:
          "https://media.licdn.com/dms/image/C560BAQEoCom5tDSPwQ/company-logo_200_200/0/1656692330296/lean_tech_io_logo?e=2147483647&v=beta&t=WQF0quSP0UvlAdEsn2nDrkQvtuj79PVgbYRbxy76-iM",
      }}
      theme={{
        button: {
          backgroundColor: "#0042DA",
          customIconSrc:
            "https://media.licdn.com/dms/image/C560BAQEoCom5tDSPwQ/company-logo_200_200/0/1656692330296/lean_tech_io_logo?e=2147483647&v=beta&t=WQF0quSP0UvlAdEsn2nDrkQvtuj79PVgbYRbxy76-iM",
        },
      }}
    />
  );
};
