import { ImageResponse } from 'next/og'
import { SITE } from '@/lib/site'

export const runtime = 'edge'

export const alt = SITE.name
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function OpenGraphImage() {
  const brand = SITE.branding.primaryColor

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          position: 'relative',
          background: '#09090b',
          color: 'white',
          fontFamily: 'sans-serif',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at top left, rgba(249,115,22,0.18), transparent 32%), radial-gradient(circle at bottom right, rgba(59,130,246,0.12), transparent 30%)',
          }}
        />

        <div
          style={{
            position: 'absolute',
            top: 40,
            left: 50,
            right: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 18,
            }}
          >
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 18,
                background: brand,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#000',
                fontSize: 28,
                fontWeight: 800,
              }}
            >
              AC
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  lineHeight: 1.1,
                }}
              >
                {SITE.name}
              </div>
              <div
                style={{
                  fontSize: 18,
                  color: '#d4d4d8',
                  marginTop: 6,
                }}
              >
                {SITE.company.city}, {SITE.company.country}
              </div>
            </div>
          </div>

          <div
            style={{
              border: '1px solid rgba(255,255,255,0.14)',
              background: 'rgba(255,255,255,0.06)',
              borderRadius: 999,
              padding: '10px 18px',
              fontSize: 18,
              color: '#e4e4e7',
            }}
          >
            Catálogo industrial
          </div>
        </div>

        <div
          style={{
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '120px 60px 70px 60px',
            width: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              maxWidth: 980,
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: -1.8,
              color: '#fff',
            }}
          >
            Soluciones industriales para ventilación, filtración, pintura y aire comprimido
          </div>

          <div
            style={{
              display: 'flex',
              maxWidth: 900,
              fontSize: 28,
              lineHeight: 1.4,
              color: '#d4d4d8',
              marginTop: 28,
            }}
          >
            Equipos especializados, fichas técnicas, referencias comerciales y cotización directa por WhatsApp.
          </div>

          <div
            style={{
              display: 'flex',
              gap: 16,
              marginTop: 40,
              flexWrap: 'wrap',
            }}
          >
            {[
              'Ventilación Industrial',
              'Filtración Industrial',
              'Cabinas de Pintura',
              'Aire Comprimido',
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  borderRadius: 999,
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  padding: '12px 18px',
                  fontSize: 20,
                  color: '#f4f4f5',
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            left: 60,
            right: 60,
            bottom: 36,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: '#a1a1aa',
            fontSize: 18,
          }}
        >
          <div>{SITE.whatsapp.phoneDisplay}</div>
          <div>{SITE.url.replace(/^https?:\/\//, '')}</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}