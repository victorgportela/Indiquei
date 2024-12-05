<template>
    <v-container>
        <h1 class="text-center mb-4">Serviços</h1>
        <v-row>
            <v-col v-for="(service, index) in serviços" :key="index" cols="12" md="4" lg="3">
                <v-card variant="flat" class="rounded-xl">
                    <v-img cover class="align-end text-grey" :src="service.imagem"></v-img>

                    <v-card-subtitle class="p-3 mt-4 text-center">{{ service.localizacao }}</v-card-subtitle>

                    <v-card-text class="align-center text-center">
                        <h1>{{ service.profissao }}</h1>
                        <div>{{ service.status }}</div>
                    </v-card-text>

                    <v-card-actions class="p-3 justify-center align-center mb-2">
                        <v-btn color="green" variant="outlined" @click="openDialog(service)">
                            Agendar
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

    <v-dialog v-model="dialog" max-width="500px">
        <v-card>
            <v-card-title class="headline">Contratar {{ selectedService.profissao }}</v-card-title>
            <v-card-subtitle>{{ selectedService.localizacao }}</v-card-subtitle>

            <v-card-text>
                <v-form v-model="formValid">
                    <v-select label="Tipo do serviço" v-model="tipo" :items="['Semanal', 'Diária', 'Mensal']"
                        required></v-select>

                    <v-text-field v-model="contractorName" label="Contratante" required></v-text-field>

                    <v-text-field v-model="contractedName" label="Contratado" required></v-text-field>

                    <v-text-field v-model="serviceDescription" label="Serviço" required></v-text-field>
                    <v-text-field v-model="diaContracted" label="Dia" required></v-text-field>
                </v-form>
            </v-card-text>

            <v-card-actions>
                <v-btn color="blue" text @click="closeDialog">Cancelar</v-btn>
                <v-btn color="green" :disabled="!formValid" @click="submitForm">Confirmar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup>
import { supabase } from '@/composables/supabase';
import { onMounted, ref } from 'vue';

const dialog = ref(false);
const selectedService = ref(null);
const serviços = ref([]);

const tipo = ref('');
const contractorName = ref('');
const contractedName = ref('');
const serviceDescription = ref('');
const diaContracted = ref('');
const formValid = ref(false);

function openDialog(service) {
    selectedService.value = service;
    dialog.value = true;
}

function closeDialog() {
    dialog.value = false;
    contractorName.value = '';
    contractedName.value = '';
    serviceDescription.value = '';
    diaContracted.value = '';
    tipo.value = '';
}

async function submitForm() {
    if (formValid.value) {
        console.log(diaContracted.value)
        const { data, error } = await supabase.from('horarios').insert({
            tipo: tipo.value,
            contratante: contractorName.value,
            contratado: contractedName.value,
            serviço: serviceDescription.value,
            dia: diaContracted.value
        });

        if (error) {
            alert(`Erro ao enviar: ${error.message}`);
            console.error(error);
        }
        console.log('Agendamento realizado com sucesso:', data);
    }
}

onMounted(async () => {
    const { data, error } = await supabase
        .from('serviços')
        .select();

    if (error) { console.error(error); }
    serviços.value = data;
});
</script>
