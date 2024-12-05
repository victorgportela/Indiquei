<template>
  <v-app>
    <v-navigation-drawer v-model="isDraweOpen">
      
      <v-list>
        <v-list-subheader>Menu</v-list-subheader>
        <v-list-item prepend-icon="mdi-home">Home</v-list-item>

        <v-list-group value="Clientes">
          
          <template #activator="{ props }">
            <v-list-item v-bind="props" prepend-icon="mdi-account-circle"> Clientes </v-list-item>
          </template>

          <v-list-item prepend-icon="mdi-file-clock">Agendamentos</v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar flat class="border-b"> 
      <v-app-bar-nav-icon @click="isDraweOpen = !isDraweOpen"></v-app-bar-nav-icon>
      <v-app-bar-title>Indiquei</v-app-bar-title>

      <template #append>
        
        <v-menu>
          <template #activator="{props}">
            <v-avatar v-bind="props">
              <v-img cover src="https://imgcdn.stablediffusionweb.com/2024/5/3/1a2e79a9-34b3-4bab-967a-3285031c45a8.jpg"></v-img>
            </v-avatar>
          </template>
          
          <v-car min-width="200px">
            <v-list :lines="false" density="compact" nav>
              <v-list-item prepend-icon="mdi-account-outline">
                <v-list-title>Meu perfil</v-list-title>
              </v-list-item>
              <v-list-item prepend-icon="mdi-heart">
                <v-list-title>Favoritos</v-list-title>
              </v-list-item>
            </v-list>
          </v-car>
        </v-menu>
      </template>
    </v-app-bar>
    
    <v-main>
      <v-container>
        <h1>Dashboard</h1>
        <v-row>

          <v-col cols="12" md="4" lg="3">
            <v-card flat class="border">
              <v-img 
              cover class="align-end text-grey"
              src="https://meumovelplanejado.com/wp-content/uploads/2024/01/1-macenaria-o-que-e.webp">
              </v-img>

              <v-card-subtitle class="p-3">Parnaíba</v-card-subtitle>

              <v-card-text>
              <div>Marceneiro</div>
              <div>Disponível</div>
              </v-card-text>

              <v-card-actions>
                <v-btn color="primary" variant="tonal">Agendar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" md="4" lg="3">
            <v-card flat class="border">
              <v-img 
              class="align-end text-grey"
              src="https://www.mapadaobra.com.br/wp-content/uploads/2023/02/iStock-587206190-scaled.jpg">
              </v-img>

              <v-card-subtitle class="p-3">Parnaíba</v-card-subtitle>

              <v-card-text>
              <div>Pedreiro</div>
              <div>Disponível</div>
              </v-card-text>

              <v-card-actions>
                <v-btn color="primary" variant="tonal">Agendar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" md="4" lg="3">
            <v-card flat class="border">
              <v-img 
              class="align-end text-grey"
              src="https://soscasacuritiba.com.br/wp-content/uploads/2023/09/O-que-faz-um-eletricista-de-manutencao-1.jpg">
              </v-img>

              <v-card-subtitle class="p-3">Parnaíba</v-card-subtitle>

              <v-card-text>
              <div>Eletricista</div>
              <div>Disponível</div>
              </v-card-text>

              <v-card-actions>
                <v-btn color="primary" variant="tonal">Agendar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" md="4" lg="3">
            <v-card flat class="border">
              <v-img 
              class="align-end text-grey"
              src="https://blog.nakata.com.br/wp-content/uploads/2022/01/post_thumbnail-2ad22e797653b79f57101e5e122a8c1d.jpeg">
              </v-img>

              <v-card-subtitle class="p-3">Parnaíba</v-card-subtitle>

              <v-card-text>
              <div>Mecânico</div>
              <div>Disponível</div>
              </v-card-text>

              <v-card-actions>
                <v-btn color="primary" variant="tonal">Agendar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" md="4" lg="3">
            <v-card flat class="border">
              <v-img 
              class="align-end text-grey"
              src="https://soscasacuritiba.com.br/wp-content/uploads/2023/10/Quanto-ganha-um-Pintor.jpg">
              </v-img>

              <v-card-subtitle class="p-3">Parnaíba</v-card-subtitle>

              <v-card-text>
              <div>Pintor</div>
              <div>Disponível</div>
              </v-card-text>

              <v-card-actions>
                <v-btn color="primary" variant="tonal">Agendar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" md="4" lg="3">
            <v-card flat class="border">
              <v-img 
              class="align-end text-grey"
              src="https://i0.wp.com/blog.damasio.com.br/wp-content/uploads/2024/05/556fb-shutterstock_1188369493_menor.jpg?fit=1024%2C683&ssl=1">
              </v-img>

              <v-card-subtitle class="p-3">Parnaíba</v-card-subtitle>

              <v-card-text>
              <div>Advogado</div>
              <div>Disponível</div>
              </v-card-text>

              <v-card-actions>
                <v-btn color="primary" variant="tonal">Agendar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" md="4" lg="3">
            <v-card flat class="border">
              <v-img 
              class="align-end text-grey"
              src="https://www.extraconsult.com.br/wp-content/uploads/2023/04/eletricista-de-manutencao.png">
              </v-img>

              <v-card-subtitle class="p-3">Parnaíba</v-card-subtitle>

              <v-card-text>
              <div>Eletricista</div>
              <div>Disponível</div>
              </v-card-text>

              <v-card-actions>
                <v-btn color="primary" variant="tonal">Agendar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" md="4" lg="3">
            <v-card flat class="border">
              <v-img 
              class="align-end text-grey"
              src="https://voiseguros.com.br/images/blog/responsabilidade-do-engenheiro-civil.jpg">
              </v-img>

              <v-card-subtitle class="p-3">Parnaíba</v-card-subtitle>

              <v-card-text>
              <div>Engenheiro</div>
              <div>Disponível</div>
              </v-card-text>

              <v-card-actions>
                <v-btn color="primary" variant="tonal">Agendar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

        </v-row>
      </v-container>
    </v-main>


  </v-app>
</template>

<script setup>
  import { ref } from 'vue';

  const isDraweOpen = ref(false)
</script>
