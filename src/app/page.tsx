'use client';

import { useState } from 'react';

export default function SSPCalculator() {
  const [contractAmount, setContractAmount] = useState<string>('');
  const [contractTerm, setContractTerm] = useState<string>('12');
  const [results, setResults] = useState<{
    upfrontLicense: number;
    totalSupport: number;
    monthlySupport: number;
  } | null>(null);

  const calculateSSP = () => {
    const amount = parseFloat(contractAmount);
    const term = parseInt(contractTerm);
    
    if (isNaN(amount) || amount <= 0 || isNaN(term) || term <= 0) {
      alert('Please enter valid contract amount and term');
      return;
    }

    const upfrontLicense = amount * 0.85;
    const totalSupport = amount * 0.15;
    const monthlySupport = totalSupport / term;

    setResults({
      upfrontLicense,
      totalSupport,
      monthlySupport
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount);
  };

  const clearCalculation = () => {
    setContractAmount('');
    setContractTerm('12');
    setResults(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              SSP Calculator
            </h1>
            <p className="text-gray-600">
              Software Support and Pricing Calculator
            </p>
            <p className="text-sm text-gray-500 mt-2">
              85% Upfront License • 15% Support
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <label htmlFor="contractAmount" className="block text-sm font-medium text-gray-700 mb-2">
                Total Contract Amount
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                <input
                  type="number"
                  id="contractAmount"
                  value={contractAmount}
                  onChange={(e) => setContractAmount(e.target.value)}
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="100,000"
                  step="0.01"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contractTerm" className="block text-sm font-medium text-gray-700 mb-2">
                Contract Term (months)
              </label>
              <input
                type="number"
                id="contractTerm"
                value={contractTerm}
                onChange={(e) => setContractTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="12"
                min="1"
              />
            </div>

            <div className="flex space-x-3">
              <button
                onClick={calculateSSP}
                className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 font-medium"
              >
                Calculate
              </button>
              <button
                onClick={clearCalculation}
                className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition duration-200"
              >
                Clear
              </button>
            </div>
          </div>

          {results && (
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Calculation Results</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border border-green-200">
                  <span className="font-medium text-green-800">Upfront License (85%)</span>
                  <span className="text-lg font-bold text-green-900">
                    {formatCurrency(results.upfrontLicense)}
                  </span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <span className="font-medium text-blue-800">Total Support (15%)</span>
                  <span className="text-lg font-bold text-blue-900">
                    {formatCurrency(results.totalSupport)}
                  </span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <span className="font-medium text-purple-800">Monthly Support</span>
                  <span className="text-lg font-bold text-purple-900">
                    {formatCurrency(results.monthlySupport)}
                  </span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Contract Term</span>
                  <span className="text-gray-900">{contractTerm} months</span>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500">
          Built for Vercel deployment
        </div>
      </div>
    </div>
  );
}