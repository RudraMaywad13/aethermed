'use client';

import Markdown from 'markdown-to-jsx'
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
            const response = await fetch('https://aethermed.onrender.com/predict', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.detail || 'Failed to process the model request.'
                );
            }

            // Works with either:
            // { "analysis": "..." }
            // or:
            // { "response": "..." }

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
        <div
            style={{
                maxWidth: '600px',
                margin: '3rem auto',
                padding: '2rem',
                fontFamily: 'system-ui, sans-serif',
                border: '1px solid #eaeaea',
                borderRadius: '8px',
            }}
        >
            <h2 style={{ marginBottom: '1.5rem' }}>
                MedGemma Image Analyzer
            </h2>

            <form
                onSubmit={handleSubmit}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                }}
            >
                {/* Image Upload */}

                <div>
                    <label
                        style={{
                            display: 'block',
                            marginBottom: '0.5rem',
                            fontWeight: 'bold',
                        }}
                    >
                        Upload Medical Image:
                    </label>

                    <input
                        type="file"
                        accept="image/png, image/jpeg, image/jpg"
                        onChange={handleFileChange}
                    />

                    {previewUrl && (
                        <div style={{ marginTop: '1rem' }}>
                            <p
                                style={{
                                    fontSize: '0.85rem',
                                    color: '#666',
                                }}
                            >
                                Image Preview:
                            </p>

                            <img
                                src={previewUrl}
                                alt="Medical image preview"
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '300px',
                                    borderRadius: '4px',
                                }}
                            />
                        </div>
                    )}
                </div>

                {/* Prompt */}

                <div>
                    <label
                        style={{
                            display: 'block',
                            marginBottom: '0.5rem',
                            fontWeight: 'bold',
                        }}
                    >
                        Analysis Query / Prompt:
                    </label>

                    <textarea
                        rows={4}
                        style={{
                            width: '100%',
                            padding: '0.75rem',
                            borderRadius: '4px',
                            border: '1px solid #ccc',
                            resize: 'vertical',
                        }}
                        placeholder="Describe the anomalies or check for specific conditions..."
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                    />
                </div>

                {/* Submit Button */}

                <button
                    type="submit"
                    disabled={loading}
                    style={{
                        padding: '0.75rem',
                        backgroundColor: loading ? '#ccc' : '#0070f3',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: loading ? 'not-allowed' : 'pointer',
                        fontWeight: 'bold',
                    }}
                >
                    {loading
                        ? 'Analyzing with MedGemma...'
                        : 'Submit to AI Model'}
                </button>
            </form>

            {/* Error */}

            {error && (
                <div
                    style={{
                        color: 'red',
                        marginTop: '1.5rem',
                        padding: '1rem',
                        border: '1px solid red',
                        borderRadius: '4px',
                        backgroundColor: '#fff5f5',
                    }}
                >
                    <strong>Error:</strong> {error}
                </div>
            )}

            {/* Result */}

            {result && (
                <div
                    style={{
                        marginTop: '2rem',
                        padding: '1.5rem',
                        backgroundColor: '#f0f4f8',
                        borderRadius: '6px',
                        border: '1px solid #d0e2ff',
                    }}
                >
                    <h3
                        style={{
                            marginTop: 0,
                            color: '#004085',
                        }}
                    >
                        AI Analysis Result:
                    </h3>

                    <p
                        style={{
                            whiteSpace: 'pre-wrap',
                            lineHeight: '1.6',
                            margin: 0,
                        }}
                    >
                        <Markdown>{result}</Markdown>
                    </p>
                </div>
            )}
        </div>
    );
}
