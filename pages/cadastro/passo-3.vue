<template>
  <div class="flex w-screen antialiased h-screen bg-gray-100 items-center justify-center">
    <div class="flex items-center justify-center gap-20">
      <InternationalOffice />
      <!-- CADASTRO -->
      <main class="w-104 mt-16 h-128 flex justify-center flex-col gap-3 p-2">
        <div class="flex justify-between">
          <NuxtLink
            to="/cadastro/passo-2"
            class="hover:text-purple-900 text-xs text-gray-600 p-1 flex items-center justify-center gap-2"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            Voltar
          </NuxtLink>
          <div class="flex flex-col text-xs text-gray-600">
            <span class="text-gray-400">Passo 03/03</span>
            <span class="text-purple-900 font-semibold">Informações estudantis</span>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-2xl font-bold">Cadastro do aluno</h3>
        </div>
        <section class="w-104 flex flex-col gap-2">
          <span class="text-gray-600">Registro Academico (RA)*</span>
          <AppFormInput type="text" placeholder="Digite seu RA" />
        </section>
        <section class="w-104 flex flex-col gap-2">
          <span class="text-gray-600">Faculdade*</span>
          <AppFormSelect
            :options="[
              { name: 'UNA', id: 1 },
              { name: 'UNIBH', id: 2 },
            ]"
          />
        </section>
        <section class="w-104 flex flex-col gap-2">
          <span class="text-gray-600">Curso*</span>
          <AppFormInput type="text" placeholder="Digite seu curso" />
        </section>
        <section class="w-104 flex flex-col gap-2">
          <span class="text-gray-600"
            >Qual instituição é sua 1ª opção de intercâmbio?*</span
          >
          <AppFormSelect
            :options="[
              { name: 'UNA', id: 1 },
              { name: 'UNIBH', id: 2 },
            ]"
          />
        </section>
        <section class="w-104 flex flex-col gap-2">
          <span class="text-gray-600"
            >Qual instituição é sua 2ª opção de intercâmbio?*</span
          >
          <AppFormSelect
            :options="[
              { name: 'UNA', id: 1 },
              { name: 'UNIBH', id: 2 },
            ]"
          />
        </section>

        <section class="w-104 flex items-start text-base gap-1 text-gray-600 font-medium">
          <NuxtLink to="/documentos" class="w-full">
            <AppButton>Avançar</AppButton>
          </NuxtLink>
        </section>
      </main>
    </div>
  </div>
</template>
<script>
import AppButton from "~/components/AppButton";
import AppFormInput from "~/components/AppFormInput";
import AppFormLabel from "~/components/AppFormLabel";
import AppFormSelect from "~/components/AppFormSelect";
import InternationalOffice from "~/components/InternationalOffice";
export default {
  name: "IndexPage",
  components: {
    AppButton,
    AppFormInput,
    AppFormLabel,
    AppFormSelect,
    InternationalOffice,
  },
  data() {
    return {
      inputType: "password",
    };
  },
  computed: {
    isPassword() {
      return this.inputType === "password";
    },
  },
  methods: {
    showPassword() {
      this.inputType = this.isPassword ? "text" : "password";
    },
  },
};
</script>
