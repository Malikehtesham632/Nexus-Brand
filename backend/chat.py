import os
import requests

OPENAI_API_KEY = os.getenv("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", "")
OPENAI_URL = "https://api.openai.com/v1/chat/completions"

BUSINESS_CONTEXT = (
    "You are a helpful assistant embedded on the Nexus website, a business platform "
    "that helps teams automate workflows, unify data, and scale faster. "
    "Answer visitor questions about Nexus in a friendly, concise way, under 4 sentences. "
    "If you do not know something specific about pricing or features, suggest they use the contact form."
)


def get_ai_reply(user_message, conversation_history):
    if not OPENAI_API_KEY:
        return "Our chat assistant is not fully set up yet. Please use the contact form and we will get back to you."

    messages = [{"role": "system", "content": BUSINESS_CONTEXT}]
    messages += conversation_history
    messages.append({"role": "user", "content": user_message})

    headers = {
        "Authorization": f"Bearer {OPENAI_API_KEY}",
        "Content-Type": "application/json",
    }

    payload = {
        "model": "gpt-4o-mini",
        "max_tokens": 300,
        "messages": messages,
    }

    response = requests.post(OPENAI_URL, headers=headers, json=payload, timeout=30)
    data = response.json()

    if "choices" not in data:
        print(f"OpenAI API error (status {response.status_code}): {data}")
        return "Sorry, something went wrong. Please try again in a moment."

    return data["choices"][0]["message"]["content"]
