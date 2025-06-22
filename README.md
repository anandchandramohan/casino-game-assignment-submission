# 🎮 Casino Game Platform

A full-featured casino gaming application built using **Node.js/Express** for the backend, **React.js/Redux** for the frontend, and **HTML Canvas** for rendering game graphics.

### 🎲 Available Games
- Roulette  
- Blackjack  
- Slot Machines  
- Craps  
- Poker (5 Card Draw & Texas Hold’em)  
- Keno  
- Race Betting

---

## 📋 Project Requirements

### 1. Write your opinion here
    - Strengths and weaknesses of UI/UX
    Strengths:
        - Visually engaging theme consistent with casino aesthetics.
        - Clear visual hierarchy and distinct separation of content blocks.
        - Responsive layout that scales across devices.
        - Well-organized structure, making it intuitive for users to navigate between sign-in and sign-up.

    Weaknesses:
        - Text readability in some themes could be improved (e.g., low contrast in light-on-light areas).
        - Lack of contextual tooltips or help icons for new users.
        - No feedback indicators for in-progress actions (e.g., connecting, submitting).
        - Could enhance accessibility (e.g., tab order, ARIA labels).

    - Crypto Payment Logic Assessment & Suggest improvements
    Strengths
        - Uses axios for HTTP requests to the NowPayments API.
        - Handles invoice creation, minimum payment checks, payment success, and cancellation.
        - Uses environment variable for BASE_URL.
        - Handles errors and returns structured JSON responses.
    Areas for Improvement
        - API Key Security
            The API key is hardcoded. It should be stored in an environment variable (e.g., process.env.NOWPAYMENTS_API_KEY) for better security.
        - Error Handling
            Errors are returned as-is, which may expose sensitive information. Consider returning only necessary error messages to the client and logging details server-side.
        - Input Validation
            There is minimal validation for amount, crypto_currency, and description. Add checks to ensure these are present and valid before making API calls.
        - Success/Cancel URLs
            The URLs are constructed using BASE_URL, but if BASE_URL is not set, this could cause issues. Add a check and a fallback or return an error if not set.
        - Async/Await Usage
            The code uses Promises with .then() and .catch(). Using async/await would make the code cleaner and easier to read.
        - Consistent Response Structure
            Ensure all responses (success and error) follow a consistent structure for easier client-side handling.
        
### 2. Wallet Integration
- Integrate wallet connection as a **precondition** for sign-in.
- Maintain the existing sign-in flow, but ensure users can only authenticate **after a successful wallet connection**

Refer the details in the document - Wallet_Connect_Flow_Explanation.pdf (https://github.com/anandchandramohan/casino-game-assignment-submission/blob/master/Wallet_Connect_Flow_Explanation.pdf)


