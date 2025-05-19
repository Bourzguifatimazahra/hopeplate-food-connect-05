
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Volume2, Volume1, VolumeX, Pause, Play } from 'lucide-react';

interface VoiceReaderProps {
  text: string;
}

const VoiceReader = ({ text }: VoiceReaderProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null);

  const startSpeaking = () => {
    if (!text) return;
    
    const synth = window.speechSynthesis;
    synth.cancel(); // Arrêter toute lecture en cours
    
    const newUtterance = new SpeechSynthesisUtterance(text);
    newUtterance.volume = volume;
    
    // Choisir une voix en français si disponible
    const voices = synth.getVoices();
    const frenchVoice = voices.find(voice => voice.lang.includes('fr'));
    if (frenchVoice) {
      newUtterance.voice = frenchVoice;
    }
    
    newUtterance.onend = () => setIsPlaying(false);
    newUtterance.onerror = () => setIsPlaying(false);
    
    synth.speak(newUtterance);
    setUtterance(newUtterance);
    setIsPlaying(true);
  };
  
  const pauseSpeaking = () => {
    const synth = window.speechSynthesis;
    synth.pause();
    setIsPlaying(false);
  };

  const resumeSpeaking = () => {
    const synth = window.speechSynthesis;
    synth.resume();
    setIsPlaying(true);
  };

  const stopSpeaking = () => {
    const synth = window.speechSynthesis;
    synth.cancel();
    setIsPlaying(false);
    setUtterance(null);
  };

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0];
    setVolume(newVolume);
    
    if (utterance) {
      utterance.volume = newVolume;
    }
  };

  // Décharger la synthèse vocale à la fermeture du composant
  React.useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const VolumeIcon = volume === 0 ? VolumeX : volume < 0.5 ? Volume1 : Volume2;

  return (
    <div className="flex items-center space-x-2 mb-4 bg-black/5 p-3 rounded-lg">
      {!isPlaying ? (
        <Button 
          variant="outline" 
          size="icon" 
          onClick={startSpeaking} 
          className="bg-lime hover:bg-lime-hover text-black"
        >
          <Play className="h-4 w-4" />
          <span className="sr-only">Lire</span>
        </Button>
      ) : (
        <Button 
          variant="outline" 
          size="icon" 
          onClick={pauseSpeaking}
        >
          <Pause className="h-4 w-4" />
          <span className="sr-only">Pause</span>
        </Button>
      )}
      
      <div className="flex items-center gap-2 w-32">
        <VolumeIcon className="h-4 w-4 text-gray-500" />
        <Slider
          value={[volume]}
          max={1}
          step={0.1}
          onValueChange={handleVolumeChange}
          className="w-full"
        />
      </div>
      
      <div className="text-xs text-gray-500">
        Écouter l'article
      </div>
    </div>
  );
};

export default VoiceReader;
