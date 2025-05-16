
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, MessageSquare, X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Bonjour ! Comment puis-je vous aider aujourd'hui ?", isUser: false },
  ]);
  const { toast } = useToast();

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message
    const userMessage = { text: message, isUser: true };
    setMessages((prev) => [...prev, userMessage]);
    
    // Clear input
    setMessage("");
    
    // Simulate bot response after a short delay
    setTimeout(() => {
      let botResponse = "";
      
      // Simple response logic based on keywords
      const lowerMessage = message.toLowerCase();
      
      if (lowerMessage.includes("bonjour") || lowerMessage.includes("salut")) {
        botResponse = "Bonjour ! Comment puis-je vous aider ?";
      } else if (lowerMessage.includes("restaurant")) {
        botResponse = "Nous avons plusieurs restaurants partenaires ! Vous pouvez les découvrir dans la section Offres.";
      } else if (lowerMessage.includes("inscription") || lowerMessage.includes("compte")) {
        botResponse = "Pour créer un compte, cliquez sur 'Inscription' en haut à droite de la page.";
      } else if (lowerMessage.includes("connexion")) {
        botResponse = "Vous pouvez vous connecter en cliquant sur 'Connexion' en haut à droite.";
      } else if (lowerMessage.includes("offre") || lowerMessage.includes("promotion")) {
        botResponse = "Retrouvez toutes nos offres dans la section 'Offres'. Vous pouvez y filtrer par type de cuisine et localisation.";
      } else if (lowerMessage.includes("merci")) {
        botResponse = "Je vous en prie ! N'hésitez pas si vous avez d'autres questions.";
      } else if (lowerMessage.includes("contact")) {
        botResponse = "Vous pouvez nous contacter via la page 'Contact' ou par email à support@hopeplate.com";
      } else if (lowerMessage.includes("association") || lowerMessage.includes("charité")) {
        botResponse = "Les associations caritatives peuvent s'inscrire sur notre plateforme pour accéder aux dons alimentaires.";
      } else if (lowerMessage.includes("prix") || lowerMessage.includes("dh") || lowerMessage.includes("dirham")) {
        botResponse = "Tous nos prix sont affichés en Dirhams marocains (DH). Vous pouvez voir les prix réduits sur chaque offre.";
      } else {
        botResponse = "Je n'ai pas complètement compris votre demande. Pourriez-vous reformuler ou me poser une autre question ?";
      }
      
      setMessages((prev) => [...prev, { text: botResponse, isUser: false }]);
    }, 800);
  };

  return (
    <>
      {/* Chat toggle button */}
      <Button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg bg-lime hover:bg-lime-hover text-black z-50"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </Button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 sm:w-96 bg-background border rounded-lg shadow-lg overflow-hidden z-50 flex flex-col max-h-[500px]">
          {/* Chat header */}
          <div className="bg-lime p-4 flex items-center gap-2 text-black">
            <Bot size={20} />
            <h3 className="font-medium">HopEplate Assistant</h3>
          </div>

          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto p-4 max-h-[300px] flex flex-col gap-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`${
                  msg.isUser
                    ? "bg-muted ml-auto text-right"
                    : "bg-lime/10 mr-auto"
                } p-3 rounded-lg max-w-[80%]`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Chat input */}
          <form onSubmit={handleSendMessage} className="border-t p-3 flex gap-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tapez votre message..."
              className="flex-1"
            />
            <Button 
              type="submit" 
              className="bg-lime hover:bg-lime-hover text-black"
              disabled={!message.trim()}
            >
              Envoyer
            </Button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatBot;
