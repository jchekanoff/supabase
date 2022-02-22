import { Button, IconClock, Typography } from '@supabase/ui'
import Link from 'next/link'
import { FC } from 'react'

interface Props {
  primaryText: string
  projectRef: string
  secondaryText: string
}

const UpgradeToPro: FC<Props> = ({ primaryText, projectRef, secondaryText }) => (
  <div
    className={[
      'block w-full p-3 px-6 border rounded border-opacity-20',
      'bg-gray-100 border-gray-600',
      'dark:bg-gray-600 dark:border-gray-500',
    ].join(' ')}
  >
    <div className="flex space-x-3">
      <div className="mt-1">
        <IconClock size="large" />
      </div>
      <div className="flex justify-between w-full items-center">
        <div>
          <Typography.Text>{primaryText}</Typography.Text>
          <div>
            <Typography.Text type="secondary">{secondaryText}</Typography.Text>
          </div>
        </div>
        <Link href={`/project/${projectRef}/settings/billing`}>
          <Button type="primary" className="flex-grow">
            Upgrade to Pro
          </Button>
        </Link>
      </div>
    </div>
  </div>
)

export default UpgradeToPro
