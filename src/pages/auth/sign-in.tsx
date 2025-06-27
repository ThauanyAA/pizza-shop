import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signInFormSchema = z.object({
  email: z.string().email('E-mail inválido'),
})

type SignInFormData = z.infer<typeof signInFormSchema>

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInFormData>()

  async function handleSignIn(data: SignInFormData) {
    console.log(data)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast.success(
        'Enviamos um e-mail com as instruções para acessar o painel',
        {
          action: {
            label: 'Reenviar e-mail',
            onClick: () => {
              handleSignIn(data)
            },
          },
        },
      )
    } catch (error) {
      console.error(error)
      toast.error('Credenciais inválidas')
    }
  }

  return (
    <div className="p-8">
      <div className="flex w-[350px] flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Acessar painel
          </h1>
          <p className="text-muted-foreground text-sm">
            Acompanhe suas vendas pelo painel do parceiro!
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
          <div className="space-y-2">
            <Label htmlFor="email">Seu e-mail</Label>
            <Input id="email" type="email" {...register('email')} />
          </div>

          <Button disabled={isSubmitting} className="w-full" type="submit">
            Acessar painel
          </Button>
        </form>
      </div>
    </div>
  )
}
