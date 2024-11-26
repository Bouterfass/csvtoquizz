export const speak = (text: string, lang: string = "ja-JP") => {
    if (!window.speechSynthesis) {
      alert("Votre navigateur ne prend pas en charge la synthèse vocale.");
      return;
    }
  
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    window.speechSynthesis.speak(utterance);
  };
  