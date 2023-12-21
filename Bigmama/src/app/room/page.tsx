import { Room } from "@/app/room/Room";
import { TextEditor } from "@/components/TextEditor";

export default function Home() {
  return (
    <main>
      <Room>
        <TextEditor />
      </Room>
    </main>
  );
}
