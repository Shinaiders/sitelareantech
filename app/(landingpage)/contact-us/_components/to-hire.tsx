import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/app/_components/ui/dialog";

export default function ToHire() {
  return (
    <div>
      <form>
        <div>
          <h1 className="text-xl font-primary/80 font-medium">
            Contratar Serviço.
          </h1>
          <p>Preencha os campos abaixo para continuar.</p>

          <input
            type="email"
            placeholder="Email"
            className="mb-20 w-full rounded-md border-0 px-5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
          />
          <label>Descrição do serviço.</label>

          <textarea
            className="max-h-24 w-full rounded-md border-0 px-5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Mensagem"
          ></textarea>
        </div>
      </form>
    </div>
  );
}
