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
            setError('Please provide both an image and an analysis prompt.');
            return;
        }

        setLoading(true);
        setError(null);
        setResult(null);

        const formData = new FormData();

        formData.append('image', file);
        formData.append('prompt', prompt);

        try {
            const response = await fetch(
                'https://aethermed.onrender.com/predict',
                {
                    method: 'POST',
                    body: formData,
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.detail || 'Failed to process the model request.'
                );
            }

            setResult(
                data.analysis ||
                data.response ||
                'No result returned.'
            );

        } catch (err) {
            setError(
                err.message || 'An unexpected error occurred.'
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen w-[50%] bg-slate-50 px-5 py-12">
            <div className="mx-auto max-w-3xl">
                <div className="mb-8">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-600">
                        <span>✦</span>
                        AetherMed AI
                    </div>

                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Medical Image Analyzer
                    </h1>

                    <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                        Upload a medical image and provide an analysis
                        prompt for MedGemma.
                    </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-7"
                    >
                        <div>
                            <div className="mb-3 flex items-center justify-between">
                                <label className="text-sm font-semibold text-slate-900">
                                    Medical Image
                                </label>

                                <span className="text-xs text-slate-600">
                                    PNG / JPG / JPEG
                                </span>
                            </div>

                            <label
                                htmlFor="medical-image"
                                className="group block cursor-pointer rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-5 transition hover:border-blue-400 hover:bg-blue-50/30"
                            >
                                {previewUrl ? (
                                    <div>
                                        <img
                                            src={previewUrl}
                                            alt="Medical image preview"
                                            className="mx-auto max-h-[380px] w-full rounded-lg bg-slate-900 object-contain"
                                        />

                                        <p className="mt-3 text-center text-sm font-medium text-blue-600">
                                            Click to replace image
                                        </p>
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center justify-center py-10 text-center">
                                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-2xl text-blue-600">
                                            +
                                        </div>

                                        <p className="text-sm font-semibold text-slate-900">
                                            Upload a medical image
                                        </p>

                                        <p className="mt-1 text-xs text-slate-600">
                                            Click here to browse your files
                                        </p>
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
                                <div className="mt-2 rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-500">
                                    Selected: {file.name}
                                </div>
                            )}
                        </div>
                        <div>
                            <div className="mb-3 flex items-center justify-between">
                                <label
                                    htmlFor="analysis-prompt"
                                    className="text-sm font-semibold text-slate-900"
                                >
                                    Analysis Prompt
                                </label>

                                <span className="text-xs text-slate-500">
                                    Required
                                </span>
                            </div>

                            <textarea
                                id="analysis-prompt"
                                rows={5}
                                value={prompt}
                                onChange={(e) =>
                                    setPrompt(e.target.value)
                                }
                                placeholder="Example: Analyze this chest X-ray and describe any visible abnormalities."
                                className="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm leading-6 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                            />

                            <p className="mt-2 text-xs text-slate-600">
                                Ask MedGemma what you want it to analyze.
                            </p>
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md disabled:cursor-not-allowed disabled:bg-slate-400"
                        >
                            {loading
                                ? 'Analyzing with MedGemma...'
                                : 'Analyze Image'}
                        </button>
                    </form>
                    {error && (
                        <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700">
                            <strong>Error:</strong> {error}
                        </div>
                    )}
                </div>
                {result && (
                    <div className="mt-6 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm sm:p-8">
                        <div className="mb-5 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                ✦
                            </div>

                            <div>
                                <h2 className="text-lg font-bold text-slate-900">
                                    AI Analysis
                                </h2>

                                <p className="text-xs text-gray-500">
                                    Generated by MedGemma
                                </p>
                            </div>
                        </div>

                        <div className="prose prose-slate max-w-none text-sm leading-7">
                            <Markdown>{result}</Markdown>
                        </div>
                    </div>
                )}

                <p className="mx-auto mt-6 max-w-xl text-center text-[11px] leading-5 text-slate-600">
                    AetherMed is an experimental research project and
                    is not a substitute for professional medical advice.
                </p>
            </div>
        </main>
    );
}