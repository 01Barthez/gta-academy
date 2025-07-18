import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Mail, 
  Copy, 
  MessageCircle 
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  url: string;
}

const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  url
}) => {
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);
  const encodedUrl = encodeURIComponent(url);

  const shareLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: 'text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/20'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      color: 'text-sky-500 hover:bg-sky-50 dark:hover:bg-sky-950/20'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: 'text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-950/20'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      color: 'text-green-600 hover:bg-green-50 dark:hover:bg-green-950/20'
    },
    {
      name: 'Email',
      icon: Mail,
      url: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
      color: 'text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-950/20'
    }
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast({
        title: "Lien copié !",
        description: "Le lien a été copié dans votre presse-papiers.",
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible de copier le lien.",
        variant: "destructive"
      });
    }
  };

  const handleShareClick = (shareUrl: string) => {
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Partager cette formation</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Social sharing buttons */}
          <div className="grid grid-cols-2 gap-2">
            {shareLinks.map((platform) => (
              <Button
                key={platform.name}
                variant="outline"
                className={`flex items-center space-x-2 justify-start ${platform.color} transition-colors`}
                onClick={() => handleShareClick(platform.url)}
              >
                <platform.icon className="w-4 h-4" />
                <span>{platform.name}</span>
              </Button>
            ))}
          </div>

          {/* Copy link section */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Copier le lien</label>
            <div className="flex space-x-2">
              <Input
                value={url}
                readOnly
                className="flex-1"
              />
              <Button
                variant="outline"
                size="icon"
                onClick={copyToClipboard}
                className="flex-shrink-0"
              >
                <Copy className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareModal;