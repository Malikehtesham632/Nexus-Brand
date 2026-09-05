import os
import requests

ANTHROPIC_API_KEY = os.getenv("ANTHROPIC_API_KEY", "")
ANTHROPIC_URL = "https://api.anthropic.com/v1/messages"

BUSINESS_CONTEXT = (
    "You are a helpful assistant embedded on the Nexus website, a business platform "
    "that helps teams automate workflows, unify data, and scale faster. "
    "Answer visitor questions about Nexus in a friendly, concise way, under 4 sentences. "
    "If you do not know something specific about pricing or features, suggest they use the contact form."
)


def get_ai_reply(user_message, conversation_history):
    if not ANTHROPIC_API_KEY:
        return "Our chat assistant is not fully set up yet. Please use the contact form and we will get back to you."

    messages = conversation_history + [{"role": "user", "content": user_message}]

    headers = {
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
    }

    payload = {
        "model": "claude-sonnet-4-6",
        "max_tokens": 300,
        "system": BUSINESS_CONTEXT,
        "messages": messages,
    }

    response = requests.post(ANTHROPIC_URL, headers=headers, json=payload, timeout=30)
    data = response.json()

    if "content" not in data:
        return "Sorry, something went wrong. Please try again in a moment."

    return data["content"][0]["text"]
