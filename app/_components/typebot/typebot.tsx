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
          "https://nextcloud.alumifrandescartaveis.com.br/apps/files_sharing/publicpreview/EEGxPN5bC6g3Bbc?file=/&fileId=83286&x=2560&y=1080&a=true&etag=4490761ddc3f82bb0fe2910ea1e8f5c1",
      }}
      theme={{
        button: {
          backgroundColor: "#0042DA",
          customIconSrc:
            "https://nextcloud.alumifrandescartaveis.com.br/apps/files_sharing/publicpreview/EEGxPN5bC6g3Bbc?file=/&fileId=83286&x=2560&y=1080&a=true&etag=4490761ddc3f82bb0fe2910ea1e8f5c1",
        },
      }}
    />
  );
};
