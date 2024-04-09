import TodoTable from "@/components/TodoTable";
import { Modal } from "@/components/ui/Modal";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto mt-8">
      <section>
        <Modal />
      </section>
      <section className="mt-4 ">
        <TodoTable />
      </section>
    </main>
  );
}
