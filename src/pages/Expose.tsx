import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

type ScoreKey = 'coordination' | 'uniqueness' | 'impression';

const Expose: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [scores, setScores] = useState<Record<ScoreKey, number>>({
    coordination: 0,
    uniqueness: 0,
    impression: 0,
  });
  const [liked, setLiked] = useState(false);
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [codeSent, setCodeSent] = useState(false);
  const [sentCode, setSentCode] = useState('');
  const [code, setCode] = useState('');
  const [verifying, setVerifying] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [pendingSubmit, setPendingSubmit] = useState(false);
  const APP_STORE_URL = 'https://apps.apple.com/app/idXXXXXXXXX';
  const appStoreBadge = i18n.language.startsWith('fr')
    ? '/images/Download_on_the_App_Store_Badge_CAES_blk_082124.svg'
    : '/images/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg';

  const canSubmit = useMemo(() => {
    const anyScore = Object.values(scores).some((v) => v > 0);
    return (liked && (anyScore || message.trim().length > 0)) || message.trim().length > 0;
  }, [liked, message, scores]);

  const handleChange = (key: ScoreKey) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setScores((prev) => ({ ...prev, [key]: Number(e.target.value) }));
  };

  const onSubmit = async () => {
    if (!canSubmit || submitting) return;
    if (message.trim().length > 0 && !emailVerified) {
      setEmailModalOpen(true);
      setPendingSubmit(true);
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitting(false);
    setSubmitted(true);
  };

  const attemptSubmit = () => {
    onSubmit();
  };

  const sendCode = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError(t('expose.email.invalidEmail'));
      return;
    }
    setEmailError('');
    const generated = String(Math.floor(100000 + Math.random() * 900000));
    setSentCode(generated);
    setCode('');
    setCodeSent(true);
  };

  const verifyCode = async () => {
    if (!codeSent) return;
    setVerifying(true);
    await new Promise((r) => setTimeout(r, 500));
    const ok = code.trim() === sentCode;
    setVerifying(false);
    if (!ok) {
      setEmailError(t('expose.email.invalidCode'));
      return;
    }
    setEmailError('');
    setEmailVerified(true);
    setEmailModalOpen(false);
    setCodeSent(false);
    if (pendingSubmit) {
      setPendingSubmit(false);
      onSubmit();
    }
  };

  return (
    <div
      className="min-h-[100dvh] w-full bg-gradient-to-b from-slate-50 to-slate-100 flex items-center justify-center p-4 overflow-y-auto"
      style={{ paddingBottom: "calc(96px + env(safe-area-inset-bottom))", paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="w-full max-w-[420px]">
        <div className="relative rounded-3xl shadow-xl bg-white/90 backdrop-blur p-4 space-y-4 max-h-[calc(100dvh-136px)] overflow-y-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-[20px] font-semibold tracking-tight">{t('expose.title')}</h1>
            <button aria-label="Close" className="h-9 w-9 grid place-items-center rounded-full hover:bg-slate-100 active:bg-slate-200 transition-colors">
              <span className="text-xl">×</span>
            </button>
          </div>

          <div className="aspect-video w-full overflow-hidden rounded-2xl bg-slate-100">
            <img src="/images/intern.png" alt="example" className="h-full w-full object-cover" />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t('expose.messagePlaceholder')}
              className="flex-1 h-11 rounded-xl border border-slate-200 bg-white px-3 text-[15px] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300"
            />
            <button
              onClick={attemptSubmit}
              disabled={!canSubmit || submitting}
              className="h-11 px-4 rounded-xl bg-slate-900 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-800 active:bg-slate-900 transition-colors"
            >
              <span className="inline-block rotate-45">✈️</span>
            </button>
          </div>

          {submitted ? (
            <div className="text-center py-6 space-y-3">
              <p className="text-lg font-medium">{t('expose.thanks')}</p>
              <a href="#" className="inline-flex h-11 px-5 items-center justify-center rounded-xl bg-black text-white hover:bg-neutral-800 transition-colors">{t('expose.downloadApp')}</a>
            </div>
          ) : (
            <>
              <ScoreRow label={t('expose.scores.coordination')} value={scores.coordination} onChange={handleChange('coordination')} />
              <ScoreRow label={t('expose.scores.uniqueness')} value={scores.uniqueness} onChange={handleChange('uniqueness')} />
              <ScoreRow label={t('expose.scores.impression')} value={scores.impression} onChange={handleChange('impression')} />

              <div className="grid grid-cols-2 gap-3 pt-1">
                <button
                  onClick={() => setLiked((v) => !v)}
                  className={`h-12 rounded-2xl border transition-colors ${
                    liked ? 'bg-rose-50 border-rose-200 text-rose-600 hover:bg-rose-100' : 'bg-white border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <span className="text-xl" aria-hidden>{liked ? '❤️' : '🤍'}</span>
                </button>
                <button
                  onClick={attemptSubmit}
                  disabled={!canSubmit || submitting}
                  className="h-12 rounded-2xl bg-slate-900 text-white hover:bg-slate-800 active:bg-slate-900 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  {submitting ? (
                    <span className="inline-flex items-center gap-2">
                      <Spinner />
                      <span>{t('expose.submitting')}</span>
                    </span>
                  ) : (
                    <span className="text-xl">&gt;</span>
                  )}
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 p-4">
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto block w-full max-w-[420px]"
          aria-label="Download on the App Store"
        >
          <img
            src={appStoreBadge}
            alt={t('expose.appStoreAlt')}
            className="h-10 w-auto mx-auto select-none"
            draggable={false}
          />
        </a>
      </div>

      {emailModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-[420px] rounded-2xl bg-white p-4 space-y-3 shadow-xl">
            <div className="flex items-center justify-between">
              <h2 className="text-[18px] font-semibold">{t('expose.email.title')}</h2>
              <button onClick={() => setEmailModalOpen(false)} className="h-8 w-8 grid place-items-center rounded-full hover:bg-slate-100">
                <span className="text-lg">×</span>
              </button>
            </div>
            <p className="text-sm text-slate-600">{t('expose.email.description')}</p>
            <div className="space-y-2">
              <input
                type="email"
                value={email}
                disabled={codeSent}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full h-11 rounded-xl border border-slate-200 bg-white px-3 text-[15px] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300 disabled:bg-slate-50"
              />
              {!codeSent ? (
                <button onClick={sendCode} className="w-full h-11 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-colors">{t('expose.email.sendCode')}</button>
              ) : (
                <div className="space-y-2">
                  <label className="text-sm text-slate-600">{t('expose.email.sentLabel', { email })}</label>
                  <input
                    inputMode="numeric"
                    maxLength={6}
                    value={code}
                    onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))}
                    placeholder={t('expose.email.codePlaceholder')}
                    className="w-full h-11 rounded-xl border border-slate-200 bg-white px-3 text-[15px] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300"
                  />
                  <button onClick={verifyCode} disabled={verifying || code.length !== 6} className="w-full h-11 rounded-xl bg-slate-900 text-white disabled:opacity-40 hover:bg-slate-800 transition-colors">
                    {verifying ? t('expose.email.verifying') : t('expose.email.verify')}
                  </button>
                  <p className="text-xs text-slate-400">{t('expose.email.demoCode', { code: sentCode })}</p>
                </div>
              )}
              {emailError && <p className="text-sm text-rose-600">{emailError}</p>}
            </div>
          </div>
        </div>
      )}

      <div
        className="fixed z-50"
        style={{ top: 'calc(env(safe-area-inset-top) + 8px)', right: 'calc(env(safe-area-inset-right) + 12px)' }}
      >
        <button
          aria-label="Switch language"
          onClick={() => i18n.changeLanguage(i18n.language.startsWith('fr') ? 'en' : 'fr')}
          className="h-11 min-w-[44px] px-3 rounded-full bg-white/95 backdrop-blur border border-slate-200 shadow-md hover:bg-white active:scale-[0.98] transition text-xs sm:text-sm font-medium uppercase tracking-wide"
        >
          {i18n.language.startsWith('fr') ? 'FR' : 'EN'}
        </button>
      </div>
    </div>
  );
};

function ScoreRow({ label, value, onChange }: { label: string; value: number; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <span className="text-[12px] font-semibold tracking-[0.12em] text-slate-700">{label}</span>
        <span className="text-[12px] tabular-nums text-slate-700">{value}</span>
      </div>
      <input type="range" min={0} max={100} step={1} value={value} onChange={onChange} className="w-full accent-slate-900" />
    </div>
  );
}

function Spinner() {
  return <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/60 border-t-white" />;
}

export default Expose;


