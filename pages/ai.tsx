// frontend/pages/ai.tsx

import { useState } from "react";
import { sendCommand } from "../lib/api";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export default function AiControlPanel() {
  const [command, setCommand] = useState("");
  const [response, setResponse] = useState("");
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (!command.trim()) return;
    try {
      const res = await sendCommand(command);
      setResponse(res.message);
      toast({ title: "✅ Success", description: res.message });
    } catch (err: any) {
      toast({ title: "❌ Error", description: err.message || "Something went wrong." });
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🤖 AI Command Panel</h1>
      <Textarea
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        placeholder="e.g. fetch airdrops or run tasks"
        className="mb-4"
      />
      <Button onClick={handleSubmit}>Send Command</Button>
      {response && (
        <div className="mt-4 bg-gray-100 dark:bg-gray-800 p-4 rounded shadow">
          <h2 className="font-semibold mb-2">Response:</h2>
          <pre>{response}</pre>
        </div>
      )}
    </div>
  );
}
