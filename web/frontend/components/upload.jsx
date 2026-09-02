'use client';

import Markdown from 'markdown-to-jsx';
import { useState } from 'react';

export default function MedicalPredictor() {
    const [file, setFile] = useState(null);
    const [prompt, setPrompt] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];
            setFile(selectedFile);
            setPreviewUrl(URL.createObjectURL(selectedFile));
            setError(null);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!file || !prompt.trim()) {
            setError('Need both an image and a prompt.');
            return;
        }

        setLoading(true);
        setError(null);
        setResult(null);

        const formData = new FormData();
        formData.append('image', file);
        formData.append('prompt', prompt);

        try {
            const response = await fetch('https://aethermed.onrender.com/predict', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.detail || 'Something went wrong.');
            }

            setResult(data.analysis || data.response || 'No result returned.');
        } catch (err) {
            setError(err.message || 'Unexpected error.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen w-full max-w-2xl px-6 py-10">
            <div className="mb-8">
                <p className="font-mono text-xs text-purple-400 mb-2">aethermed / dashboard</p>
                <h1 className="text-2xl font-bold text-white">Medical Image Analyzer</h1>
                <p className="mt-2 text-sm text-zinc-400">
                    Upload a chest X-ray, write what you want analyzed, hit run.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <div className="mb-2 flex items-center justify-between">
                        <label className="text-sm font-medium text-white">Image</label>
                        <span className="text-xs text-zinc-500">PNG / JPG / JPEG</span>
                    </div>

                    <label
                        htmlFor="medical-image"
                        className="block cursor-pointer rounded border-2 border-dashed border-zinc-600 bg-zinc-900 p-4 hover:border-purple-500 transition-colors"
                    >
                        {previewUrl ? (
                            <div>
                                <img
                                    src={previewUrl}
                                    alt="preview"
                                    className="mx-auto max-h-80 w-full rounded object-contain bg-zinc-950"
                                />
                                <p className="mt-2 text-center text-xs text-zinc-400">click to replace</p>
                            </div>
                        ) : (
                            <div className="py-10 text-center">
                                <p className="text-sm text-zinc-400">drop image here or click to browse</p>
                            </div>
                        )}

                        <input
                            id="medical-image"
                            type="file"
                            accept="image/png, image/jpeg, image/jpg"
                            onChange={handleFileChange}
                            className="hidden"
                        />
                    </label>

                    {file && (
                        <p className="mt-1 text-xs text-zinc-500">{file.name}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="analysis-prompt" className="mb-2 block text-sm font-medium text-white">
                        Prompt
                    </label>

                    <textarea
                        id="analysis-prompt"
                        rows={4}
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="e.g. Analyze this chest X-ray and describe any visible abnormalities."
                        className="w-full rounded border border-zinc-700 bg-zinc-900 px-3 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:border-purple-500 focus:outline-none"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded bg-purple-600 py-2.5 text-sm font-medium text-white hover:bg-purple-500 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {loading ? 'analyzing...' : 'run analysis'}
                </button>
            </form>

            {error && (
                <div className="mt-5 rounded border border-red-800 bg-red-950/50 px-4 py-3 text-sm text-red-400">
                    {error}
                </div>
            )}

            {result && (
                <div className="mt-6 rounded border border-zinc-700 bg-zinc-900 p-5">
                    <div className="mb-4 flex items-center gap-2">
                        <span className="font-mono text-xs text-purple-400">output</span>
                        <span className="text-xs text-zinc-600">— MedGemma</span>
                    </div>

                    <div className="prose prose-invert prose-sm max-w-none text-zinc-300">
                        <Markdown>{result}</Markdown>
                    </div>
                </div>
            )}

            <p className="mt-8 text-center text-xs text-zinc-600">
                experimental — not a substitute for clinical judgment
            </p>
        </main>
    );
}
