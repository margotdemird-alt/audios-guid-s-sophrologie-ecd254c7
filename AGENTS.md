# Décisions techniques

- Paiement Stripe BYOK (clé de test de l'utilisatrice) : `STRIPE_SECRET_KEY` + `STRIPE_WEBHOOK_SECRET` dans les secrets, fonction `stripe-webhook` avec vérification de signature obligatoire (aucun fallback non signé). Pourquoi : éviter les faux événements de paiement.
- `PUBLIC_SITE_URL` (secret de config) définit l'origine des liens `/acces/:token` envoyés par e-mail : aperçu Lovable pendant la phase de test, à remplacer par `https://audios.sophrologie-margot.com` à la publication. Pourquoi : le domaine de production n'existe pas encore.
- Ko-fi reste actif tant que le nouveau système de paiement n'est pas validé ; les liens Ko-fi techniques sont conservés (mentions visibles supprimées).
- E-mails de confirmation d'achat via MailerSend (secret `MAILERSEND_API_KEY`, expéditeur optionnel `MAILERSEND_FROM_EMAIL`) ; la fonction `send-confirmation-email` n'accepte que les appels internes (clé service). Pourquoi : MailerLite reste dédié au marketing, MailerSend gère le transactionnel.
