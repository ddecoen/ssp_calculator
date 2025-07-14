# SSP Calculator

A Software Support and Pricing (SSP) calculator built with Next.js and deployed on Vercel. This tool helps calculate the breakdown of software contracts with an 85% upfront license fee and 15% support costs distributed over the contract term.

## Features

- **85/15 Split Calculation**: Automatically splits contract amounts into 85% upfront license and 15% support
- **Monthly Support Breakdown**: Calculates monthly support costs based on contract term
- **Responsive Design**: Works on desktop and mobile devices
- **Real-time Calculation**: Instant results as you input values
- **Currency Formatting**: Professional USD currency formatting
- **Input Validation**: Ensures valid contract amounts and terms

## Live Demo

The application is deployed on Vercel and can be accessed at: [Your Vercel URL]

## How to Use

1. **Enter Contract Amount**: Input the total contract value in USD
2. **Set Contract Term**: Specify the contract duration in months (default: 12 months)
3. **Calculate**: Click the "Calculate" button to see the breakdown
4. **View Results**: See the split between:
   - Upfront License (85% of total)
   - Total Support (15% of total)
   - Monthly Support (support amount divided by contract term)

## Example Calculation

For a $100,000 contract over 12 months:
- **Upfront License**: $85,000 (85%)
- **Total Support**: $15,000 (15%)
- **Monthly Support**: $1,250 ($15,000 ÷ 12 months)

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Package Manager**: npm

## Local Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ddecoen/ssp_calculator.git
   cd ssp_calculator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment on Vercel

This project is optimized for Vercel deployment:

1. **Automatic Deployment**: Connect your GitHub repository to Vercel
2. **Zero Configuration**: No additional setup required
3. **Environment Variables**: None required for basic functionality

### Manual Deployment

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

## Project Structure

```
ssp_calculator/
├── src/
│   └── app/
│       ├── globals.css      # Global styles
│       ├── layout.tsx       # Root layout
│       └── page.tsx         # Main calculator component
├── public/                  # Static assets
├── package.json            # Dependencies and scripts
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # This file
```

## Customization

### Changing the Split Percentage

To modify the 85/15 split, update the calculation in `src/app/page.tsx`:

```typescript
const upfrontLicense = amount * 0.85; // Change 0.85 to desired percentage
const totalSupport = amount * 0.15;   // Change 0.15 to desired percentage
```

### Styling

The application uses Tailwind CSS. Modify classes in `src/app/page.tsx` to customize the appearance.

### Currency

To change from USD to another currency, update the `formatCurrency` function:

```typescript
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR', // Change to desired currency
    minimumFractionDigits: 2
  }).format(amount);
};
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit: `git commit -am 'Add feature'`
5. Push: `git push origin feature-name`
6. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For questions or issues, please open an issue on GitHub or contact the maintainer.

---

**Built with ❤️ for Vercel deployment**