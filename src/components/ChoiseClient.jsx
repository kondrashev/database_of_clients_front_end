import AudioFile from '../audio/ChoiseClient.mp3';
export const ChoiseClient = () => {
    let choiseClient = new Audio(AudioFile);
    choiseClient.play();
}