import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import { describe, expect, it, vi } from 'vitest'
import { Field, FieldLabel } from '@/components/ui/Field'
import { FileUpload } from './FileUpload'

describe('FileUpload', () => {
  it('uploads a file through the hidden input', async () => {
    render(
      <Field>
        <FieldLabel>Attachment</FieldLabel>
        <FileUpload />
      </Field>
    )

    const input = screen.getByLabelText('Attachment')
    const file = new File(['hello'], 'hello.txt', { type: 'text/plain' })
    await userEvent.upload(input, file)

    expect(screen.getByText('hello.txt')).toBeInTheDocument()
  })

  it('removes a selected file', async () => {
    render(<FileUpload aria-label="Attachment" defaultFiles={[new File(['a'], 'a.txt')]} />)
    await userEvent.click(screen.getByRole('button', { name: 'Remove' }))
    expect(screen.queryByText('a.txt')).not.toBeInTheDocument()
  })

  it('calls onFilesChange on upload', async () => {
    const onFilesChange = vi.fn()
    render(<FileUpload aria-label="Attachment" onFilesChange={onFilesChange} multiple />)

    const input = screen.getByLabelText('Attachment')
    const file = new File(['hello'], 'hello.txt', { type: 'text/plain' })
    await userEvent.upload(input, file)

    expect(onFilesChange).toHaveBeenCalled()
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<FileUpload aria-label="Attachment" />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
