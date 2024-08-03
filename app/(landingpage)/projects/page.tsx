import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import { Epilogue } from "next/font/google";
const epilogue = Epilogue({ subsets: ["latin"] });

export default function Projects() {
  return (
    <div
      className={` ${epilogue.className} flex items-center justify-center w-full h-full xl:px-20 px-2 space-y-40 font-epilogue mb-40`}
    >
      <div className="w-96 h-[26rem] mt-40">
        <Card>
          <CardHeader>
            <CardTitle>LareanTech</CardTitle>
            <CardDescription>Seja bem vindo ao LareanTech</CardDescription>
          </CardHeader>
          <CardContent className="w-full ">
            <p>
              Nossa equipe está empenhada a preparar o portfolio da LareanTech.
              Estamos a trabalhar em vários projetos, e esperamos que você seja
              bem vindo.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
