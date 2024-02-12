<!--
  (c) 2023, Center for Computational Thinking and Design at Aarhus University and contributors
 
  SPDX-License-Identifier: MIT
 -->

<script lang="ts">
  import { slide } from 'svelte/transition';
  import { t } from '../i18n';
  import { gestures } from '../script/stores/Stores';

  // Count of amount of recordings
  $: numberOfRecodings = $gestures.reduce(
    (sum, val) => (sum += val.recordings.length),
    0,
  );
</script>

<div class="w-full text-center text-xl justify-center pt-5 pb-7">
  <p>{numberOfRecodings} {$t('menu.data.examples')}</p>
</div>
