import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Ally Rae Speech — Speech-Language Pathologist in Cleveland, Ohio'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #2D6B6B 0%, #1e4f4f 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '80px',
          fontFamily: 'Georgia, serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: '#FAFAF8',
              lineHeight: 1.1,
            }}
          >
            Ally Rae Speech
          </div>
          <div
            style={{
              fontSize: 28,
              color: '#F5F0E8',
              opacity: 0.9,
              maxWidth: '700px',
              lineHeight: 1.4,
            }}
          >
            Evidence-based speech therapy for adults in Cleveland, Ohio
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginTop: '16px',
            }}
          >
            <div
              style={{
                fontSize: 18,
                color: '#C4888A',
                fontWeight: 600,
              }}
            >
              MS, CF-SLP · Cleveland State University
            </div>
          </div>
        </div>
        {/* Decorative circle */}
        <div
          style={{
            position: 'absolute',
            right: '-100px',
            bottom: '-100px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'rgba(196, 136, 138, 0.15)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: '60px',
            top: '60px',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'rgba(107, 143, 113, 0.15)',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
