// script.js

setTimeout(() => {
    window.location.href = "https://urssanjaysingh.onrender.com/";
}, 5000); // Redirect after 5 seconds

const buddhaQuotes = [
    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    "The mind is everything. What you think you become.",
    "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.",
    "Three things cannot be long hidden: the sun, the moon, and the truth.",
    "You will not be punished for your anger, you will be punished by your anger.",
    "To keep the body in good health is a duty... otherwise, we shall not be able to keep our mind strong and clear.",
    "The only real failure in life is not to be true to the best one knows.",
    "Peace comes from within. Do not seek it without.",
    "You only lose what you cling to.",
    "Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned.",
    "An idea that is developed and put into action is more important than an idea that exists only as an idea.",
    "Better than a thousand hollow words, is one word that brings peace.",
    "Even death is not to be feared by one who has lived wisely.",
    "No one saves us but ourselves. No one can and no one may. We ourselves must walk the path.",
    "Hatred ceases through love. This is an unalterable law.",
    "Radiate boundless love towards the entire world.",
    "In the end, only three things matter: how much you loved, how gently you lived, and how gracefully you let go of things not meant for you.",
    "To live a pure unselfish life, one must count nothing as one's own in the midst of abundance.",
    "We are shaped by our thoughts; we become what we think. When the mind is pure, joy follows like a shadow that never leaves.",
    "Your work is to discover your world and then with all your heart give yourself to it.",
    "An insincere and evil friend is more to be feared than a wild beast; a wild beast may wound your body, but an evil friend will wound your mind.",
    "The secret of health for both mind and body is not to mourn for the past, not to worry about the future, but to live the present moment wisely and earnestly.",
    "Just as a candle cannot burn without fire, men cannot live without a spiritual life.",
    "There is no fire like passion, there is no shark like hatred, there is no snare like folly, there is no torrent like greed.",
    "What you are is what you have been. What you'll be is what you do now.",
    "Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.",
    "The thought manifests as the word. The word manifests as the deed. The deed develops into habit. And the habit hardens into character. So watch the thought and its ways with care. And let it spring from love, born out of concern for all beings.",
    "The way is not in the sky. The way is in the heart.",
    "To conquer oneself is a greater task than conquering others.",
    "Believe nothing, no matter where you read it, or who said it, no matter if I have said it, unless it agrees with your own reason and your own common sense."
];

const quoteElement = document.querySelector('.quote');
const randomQuote = buddhaQuotes[Math.floor(Math.random() * buddhaQuotes.length)];
quoteElement.textContent = randomQuote;
