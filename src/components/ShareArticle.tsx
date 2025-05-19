
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog";
import { Share2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ShareArticleProps {
  title: string;
  url: string;
}

const ShareArticle = ({ title, url }: ShareArticleProps) => {
  const [email, setEmail] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSending(true);
    
    // Simulation d'envoi d'e-mail
    setTimeout(() => {
      setIsSending(false);
      setEmail('');
      setIsDialogOpen(false);
      
      toast({
        title: "Article partagé !",
        description: `L'article a été envoyé à ${email}`,
      });
    }, 1500);
  };

  const shareViaOtherPlatforms = (platform: string) => {
    let shareUrl = '';
    
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(title)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
        break;
      case 'whatsapp':
        shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(title + ' ' + url)}`;
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank');
    }
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-1">
          <Share2 className="h-4 w-4" />
          Partager
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Partager l'article</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <p className="text-sm font-medium">Partager par e-mail</p>
            <Input 
              type="email" 
              placeholder="Adresse e-mail du destinataire" 
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          
          <DialogFooter>
            <Button type="submit" disabled={isSending} className="bg-lime hover:bg-lime-hover text-black">
              {isSending ? 'Envoi en cours...' : 'Envoyer'}
            </Button>
          </DialogFooter>
        </form>
        
        <div className="border-t pt-4">
          <p className="text-sm font-medium mb-2">Partager sur les réseaux sociaux</p>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => shareViaOtherPlatforms('facebook')}
            >
              Facebook
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => shareViaOtherPlatforms('twitter')}
            >
              Twitter
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => shareViaOtherPlatforms('whatsapp')}
            >
              WhatsApp
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareArticle;
