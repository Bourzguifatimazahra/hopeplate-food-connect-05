
import { useState, useCallback } from "react";
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
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const processMessage = useCallback(async (userMessage: string) => {
    try {
      setIsLoading(true);
      
      // Simulation de l'API ChatGPT (à remplacer par une vraie intégration API)
      // Note: Dans une vraie implémentation, appelez l'API OpenAI ici
      const botResponse = await simulateChatGPTResponse(userMessage);
      
      setMessages((prev) => [...prev, { text: botResponse, isUser: false }]);
    } catch (error) {
      console.error("Erreur lors du traitement du message:", error);
      toast({
        title: "Erreur",
        description: "Impossible de traiter votre message. Veuillez réessayer.",
        variant: "destructive",
      });
      
      setMessages((prev) => [
        ...prev,
        { text: "Désolé, je rencontre des difficultés. Veuillez réessayer plus tard.", isUser: false },
      ]);
    } finally {
      setIsLoading(false);
    }
  }, [toast]);

  // Simulation de l'API ChatGPT (à remplacer par une vraie intégration API)
  const simulateChatGPTResponse = async (userMessage: string): Promise<string> => {
    // Attendre pour simuler une requête réseau
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes("bonjour") || lowerMessage.includes("salut")) {
      return "Bonjour ! Comment puis-je vous aider ?";
    } else if (lowerMessage.includes("restaurant")) {
      return "Nous avons plusieurs types de restaurants partenaires : restaurants traditionnels, cafés, snacks, et pâtisseries. Que recherchez-vous ?";
    } else if (lowerMessage.includes("café") || lowerMessage.includes("cafe") || lowerMessage.includes("coffee")) {
      return "Nos cafés partenaires proposent des offres spéciales pour le petit-déjeuner et le goûter. Consultez la section Offres pour les découvrir.";
    } else if (lowerMessage.includes("snack")) {
      return "Les snacks partenaires proposent des menus rapides à prix réduits pour le déjeuner et le dîner.";
    } else if (lowerMessage.includes("pâtisserie") || lowerMessage.includes("patisserie")) {
      return "Nos pâtisseries partenaires proposent des box de fin de journée avec une sélection de délicieuses pâtisseries à prix réduits.";
    } else if (lowerMessage.includes("petit-déjeuner") || lowerMessage.includes("petit déjeuner") || lowerMessage.includes("dejeuner")) {
      return "Pour le petit-déjeuner, consultez nos offres spéciales entre 7h et 10h. Plusieurs cafés et pâtisseries participent à ces offres.";
    } else if (lowerMessage.includes("déjeuner") || lowerMessage.includes("dejeuner") || lowerMessage.includes("midi")) {
      return "Pour le déjeuner, consultez nos offres entre 12h et 14h. De nombreux restaurants et snacks proposent des menus complets à prix réduits.";
    } else if (lowerMessage.includes("dîner") || lowerMessage.includes("diner") || lowerMessage.includes("soir")) {
      return "Pour le dîner, découvrez nos offres de 18h à 21h. Nos restaurants partenaires proposent des menus variés pour tous les goûts.";
    } else if (lowerMessage.includes("inscription") || lowerMessage.includes("compte")) {
      return "Pour créer un compte, cliquez sur 'Inscription' en haut à droite de la page.";
    } else if (lowerMessage.includes("connexion")) {
      return "Vous pouvez vous connecter en cliquant sur 'Connexion' en haut à droite.";
    } else if (lowerMessage.includes("offre") || lowerMessage.includes("promotion")) {
      return "Retrouvez toutes nos offres dans la section 'Offres'. Vous pouvez y filtrer par type de cuisine et localisation.";
    } else if (lowerMessage.includes("merci")) {
      return "Je vous en prie ! N'hésitez pas si vous avez d'autres questions.";
    } else if (lowerMessage.includes("contact")) {
      return "Vous pouvez nous contacter via la page 'Contact' ou par email à support@hopeplate.com";
    } else if (lowerMessage.includes("association") || lowerMessage.includes("charité")) {
      return "Les associations caritatives peuvent s'inscrire sur notre plateforme pour accéder aux dons alimentaires.";
    } else if (lowerMessage.includes("prix") || lowerMessage.includes("dh") || lowerMessage.includes("dirham")) {
      return "Tous nos prix sont affichés en Dirhams marocains (DH). Vous pouvez voir les prix réduits sur chaque offre.";
    } else {
      return "Je n'ai pas complètement compris votre demande. Pourriez-vous reformuler ou me poser une autre question sur nos restaurants, cafés, snacks ou pâtisseries ?";
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message
    const userMessage = { text: message, isUser: true };
    setMessages((prev) => [...prev, userMessage]);
    
    // Clear input
    const currentMessage = message;
    setMessage("");
    
    // Process message and get bot response
    await processMessage(currentMessage);
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
            {isLoading && (
              <div className="bg-lime/10 mr-auto p-3 rounded-lg max-w-[80%]">
                <span className="inline-flex gap-1">
                  <span className="animate-bounce">.</span>
                  <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>.</span>
                  <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>.</span>
                </span>
              </div>
            )}
          </div>

          {/* Chat input */}
          <form onSubmit={handleSendMessage} className="border-t p-3 flex gap-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tapez votre message..."
              className="flex-1"
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              className="bg-lime hover:bg-lime-hover text-black"
              disabled={!message.trim() || isLoading}
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
