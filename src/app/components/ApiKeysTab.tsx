'use client';
import { useState } from 'react';
import { FiTrash2, FiCopy } from 'react-icons/fi';
import { nanoid } from 'nanoid'; // for generating unique IDs

type ApiKey = {
  id: string;
  key: string;
  createdAt: string;
};

const ApiKeysTab = () => {
  const [apiKeys, setApiKeys] = useState <ApiKey[]>([]);

  const generateApiKey = () => {
    const newKey: ApiKey = {  
      id: nanoid(8),
      key: `sk_test_${nanoid(32)}`,
      createdAt: new Date().toLocaleDateString('en-US'),
    };
    setApiKeys(prev => [...prev, newKey]);
  };

  const deleteKey = (id: string) => {
    setApiKeys(prev => prev.filter(k => k.id !== id));
  };

  const copyKey = async (key: string) => {
    await navigator.clipboard.writeText(key);
    alert('API key copied!');
  };``

  
  return (
    <div className="flex flex-col md:gap-14 gap-6 items-center justify-center w-full">
        <button
            onClick={generateApiKey}
            className="md:text-sm text-center md:mt-10 text-xs px-[2px] py-[2px] bg-black rounded-full text-white hover:opacity-90 transition relative group LOGO_FAMILY" >
            <span className="absolute inset-0 rounded-full overflow-hidden p-[1px]">
            <span
                className="absolute inset-0 rounded-full" style={{
                background:
                    'linear-gradient(90deg, #560085 0%, #C557C7 34.13%, #DD401E 70.19%, #FFB700 100%)',}}></span>
            </span>
            <span className="relative z-10 block w-full h-full rounded-full bg-gray-900 md:px-10 md:py-2 px-5 py-2">
            Generate API Key
            </span>
        </button>

        <div
            className="p-[1px] rounded-[10px] shadow-[0px_10px_61px_0px_#ffffff2e] w-fit max-w-5xl"
            style={{
            background:
                'linear-gradient(to bottom right, rgba(255,255,255,0.45) -0.88%, rgba(255,255,255,0.3) 24.09%, rgba(255,255,255,0.2) 48.88%, rgba(255,255,255,0.45) 109.62%)',
            }}>

            <div className="rounded-xl w-full h-full bg-black p-4 overflow-x-auto">
            {apiKeys.length === 0 ? (
                <p className="text-white">There are no API keys yet. Click the button above to create your API key.</p>
            ) : (
                <table className="w-full text-left text-white border-collapse">
                <thead>
                    <tr className="text-sm bg-[#FFFFFF1A] rounded-full">
                    <th className="md:px-6 md:py-2 font-[570]">SR. NO</th>
                    <th className="md:px-6 md:py-2 font-[570]">API Keys</th>
                    <th className="md:px-6 md:py-2 font-[570]">Date Created</th>
                    <th className="md:px-6 md:py-2 font-[570]">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {apiKeys.map((api, index) => (
                    <tr key={api.id} className="border-b border-[#FFFFFF1F] text-sm">
                        <td className="md:px-6 md:py-2">{index + 1}</td>
                        <td className="md:px-6 md:py-2 flex items-center gap-2">
                        {api.key}
                        <button onClick={() => copyKey(api.key)}>
                            <FiCopy className="text-white hover:text-yellow-400" />
                        </button>
                        </td>
                        <td className="md:px-6 md:py-2">{api.createdAt}</td>
                        <td className="md:px-6 md:py-2">
                        <button onClick={() => deleteKey(api.id)}>
                            <FiTrash2 className="text-red-400 hover:text-red-600" />
                        </button>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            )}
            </div>
        </div>
    </div>
  );
};

export default ApiKeysTab;
