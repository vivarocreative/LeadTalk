import logging

logger = logging.getLogger(__name__)

class BaseComms:
    def send_message(self, recipient: str, content: str):
        raise NotImplementedError

class WebhookComms(BaseComms):
    def send_message(self, recipient: str, content: str):
        logger.info(f"[WebhookComms] Sending message to {recipient}: {content}")
        # In real life, we would do an httpx.post(url, json={"msg": content})
        return True

class SMSComms(BaseComms):
    def send_message(self, recipient: str, content: str):
        logger.info(f"[SMSComms] Sending SMS to {recipient}: {content}")
        # In real life, we would call Twilio API
        return True

class CommsFactory:
    @staticmethod
    def get_provider(provider_type: str) -> BaseComms:
        if provider_type == "sms":
            return SMSComms()
        return WebhookComms()
