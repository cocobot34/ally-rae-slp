import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Ally Rae — SLP Portfolio'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FAFAF8',
          fontFamily: 'Georgia, serif',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 8,
            backgroundColor: '#2D6B6B',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 8,
            backgroundColor: '#C4888A',
          }}
        />
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            color: '#2D6B6B',
            marginBottom: 20,
          }}
        >
          Ally Rae
        </div>
        <div
          style={{
            fontSize: 32,
            color: '#6B7280',
            marginBottom: 12,
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          Speech-Language Pathologist
        </div>
        <div
          style={{
            fontSize: 28,
            color: '#6B7280',
            marginBottom: 30,
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          Cleveland, Ohio
        </div>
        <div
          style={{
            width: 160,
            height: 3,
            backgroundColor: '#C4888A',
            marginBottom: 30,
          }}
        />
        <div
          style={{
            fontSize: 22,
            color: '#9E5A5C',
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          MS, CF-SLP · Adult Medical Rehabilitation
        </div>
      </div>
    ),
    { ...size }
  )
}
