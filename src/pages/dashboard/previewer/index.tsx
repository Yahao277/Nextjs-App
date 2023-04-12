/* eslint-disable import/no-named-as-default */
import { Box, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import type { ReactElement } from 'react';
import React, { useEffect } from 'react';

import { ShellWithGroupedMenu } from '@/components/ShellWithGroupedMenu/App';
import { PageContent } from '@/components/ShellWithGroupedMenu/PageContent';
import usePostContext from '@/contexts/post.context';
import useProjectContext from '@/contexts/project.context';
import { ProjectApi } from '@/services/project.service';

// eslint-disable-next-line unused-imports/no-unused-vars
const postHtml = `
<p><img decoding="async" class="size-full wp-image-1342 aligncenter"
        src="https://cdn.pianodreamers.com/wp-content/uploads/2017/07/yamaha-p115-featured.jpg"
        alt="Revisión de Yamaha P-115" width="680" height="350"></p>
<p>
    <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;">En este artículo vamos a repasar un teclado de nivel intermedio de la
            marca japonesa, el </font>
    </font><a href="https://www.amazon.com/Yamaha-P115-Key-Digital-Piano/dp/B00UHBGE7A/?tag=pdreamers-20"
        target="_blank" rel="noopener nofollow noreferrer">
        <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">Yamaha P-115</font>
        </font>
    </a>
    <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;"> .</font>
    </font>
</p>
<p>
    <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;">El piano ha sustituido al anterior modelo </font>
    </font><strong>
        <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">P-105</font>
        </font>
    </strong>
    <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;"> , que ha sido uno de los líderes en el mercado de los pianos digitales
            portátiles.</font>
    </font>
</p>
<p>
    <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;">No es de extrañar, Yamaha ha hecho un gran esfuerzo por mejorar el
            instrumento para poder competir con éxito con otras marcas importantes.</font>
    </font>
</p>
<p>
    <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;">El P-115 es el </font>
    </font><strong><span style="text-decoration: underline;">
            <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">modelo intermedio</font>
            </font>
        </span></strong>
    <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;"> entre el </font>
    </font><a href="https://www.pianodreamers.com/yamaha-p45-review/" target="_blank" rel="noopener noreferrer">
        <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">P45</font>
        </font>
    </a>
    <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;"> y el </font>
    </font><a href="https://www.amazon.com/Yamaha-Professional-Weighted-Digital-Sustain/dp/B00HSPW57G/?tag=pdreamers-20"
        target="_blank" rel="noopener nofollow noreferrer">
        <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">P255</font>
        </font>
    </a>
    <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;"> en la línea Portable (P) de Yamaha.</font>
    </font><em><br>
    </em>
</p>
<div class="su-note" style="border:0;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;">
    <div class="su-note-inner su-clearfix su-u-trim"
        style="overflow: hidden; background-color:#f9e5e5; border-color:#aea0a0;color:#000000;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;">
        <p><strong>
                <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">Actualización de junio de 2018</font>
                </font>
            </strong>
            <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;"> : el Yamaha P-115 ha sido descontinuado y reemplazado por un
                    nuevo modelo, el </font>
            </font><a
                href="https://www.amazon.com/Yamaha-88-Key-Weighted-Digital-Sustain/dp/B07BSM7PFL/?tag=pdreamers-20"
                target="_blank" rel="noopener nofollow noreferrer">
                <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">P-125</font>
                </font>
            </a>
            <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;"> . </font>
                <font style="vertical-align: inherit;">Lea mi reseña completa del P-125 </font>
            </font><a href="https://www.pianodreamers.com/yamaha-p125-review/">
                <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">aquí</font>
                </font>
            </a>
            <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;"> .</font>
            </font>
        </p>
    </div>
</div>
<p>
    <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;">El piano está equipado con un teclado de </font>
    </font><strong>
        <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">acción totalmente ponderado</font>
        </font>
    </strong>
    <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;"> de 88 teclas , </font>
    </font><strong>
        <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">14</font>
        </font>
    </strong>
    <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;"> sonidos de instrumentos </font>
        <font style="vertical-align: inherit;">, un sistema de altavoces de 14 W, una grabadora de audio integrada y más
        </font>
    </font><strong>
        <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">.</font>
        </font>
    </strong>
    <font style="vertical-align: inherit;"></font>
</p>
<p>
    <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;">El P-115 también tiene nuevas características como </font>
    </font><em>
        <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">Control Acústico Inteligente</font>
        </font>
    </em>
    <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;"> (IAC), función </font>
    </font><em>
        <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">Sound Boost</font>
        </font>
    </em>
    <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;"> ; </font>
        <font style="vertical-align: inherit;">también se ha aumentado </font>
        <font style="vertical-align: inherit;">el número de </font>
    </font><strong>
        <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">polifonía .</font>
        </font>
    </strong>
    <font style="vertical-align: inherit;"></font>
</p>
<p>
    <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;">Ahora sumerjámonos en la revisión y echemos un vistazo profundo al P-115.
        </font>
    </font>
</p>
<div class="specs-box">
    <p>
        <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">Yamaha P-115 Especificaciones</font>
        </font>
    </p>
    <ul style="list-style-type: disc; padding-top: 0px; padding-bottom: 0px;">
        <li style="padding-bottom: 3px;">
            <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">Teclado totalmente contrapesado de 88 teclas con cubierta negra
                    mate</font>
            </font>
        </li>
        <li style="padding-bottom: 3px;">
            <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">Martillo graduado Acción estándar</font>
            </font>
        </li>
        <li style="padding-bottom: 3px;">
            <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">Sensibilidad táctil (dura, media, suave, fija)</font>
            </font>
        </li>
        <li style="padding-bottom: 3px;"><strong>
                <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">Sonido:</font>
                </font>
            </strong>
            <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;"> motor de sonido Pure CF</font>
            </font>
        </li>
        <li style="padding-bottom: 3px;">
            <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">polifonía de 192 notas</font>
            </font>
        </li>
        <li style="padding-bottom: 3px;">
            <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">14 sonidos de instrumentos (3 pianos)</font>
            </font>
        </li>
        <li style="padding-bottom: 3px;">
            <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">50 canciones de piano preestablecidas + 14 canciones de
                    demostración</font>
            </font>
        </li>
        <li style="padding-bottom: 3px;"><strong>
                <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">Modos:</font>
                </font>
            </strong>
            <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;"> dúo, dividido, dual</font>
            </font>
        </li>
        <li style="padding-bottom: 3px;">
            <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">Función de lección (capacidad de practicar la parte de cada mano
                    por separado)</font>
            </font>
        </li>
        <li style="padding-bottom: 3px;">
            <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">Grabadora MIDI de 2 pistas</font>
            </font>
        </li>
        <li style="padding-bottom: 3px;">
            <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">Metrónomo (14 ritmos), transposición, afinación</font>
            </font>
        </li>
        <li style="padding-bottom: 3px;">
            <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">Realce de sonido, control acústico inteligente</font>
            </font>
        </li>
        <li style="padding-bottom: 3px;">
            <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">Altavoces: 7W + 7W (12cm x 2 + 4cm x 2)</font>
            </font>
        </li>
        <li style="padding-bottom: 3px;"><strong>
                <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">Conexiones:</font>
                </font>
            </strong>
            <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;"> USB a host, tomas de auriculares (2), salida de línea, toma de
                    pedal de sostenido</font>
            </font>
        </li>
        <li style="padding-bottom: 3px;">
            <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">1326 x 295 x 163 mm (52,2” x 11,6” x 6,4”)</font>
            </font>
        </li>
        <li style="padding-bottom: 3px;">
            <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">11,8 kg (26 libras 3 onzas)</font>
            </font>
        </li>
    </ul>
</div>
<p>
    <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;">A continuación puede consultar la disponibilidad y el precio actual del
        </font>
    </font><strong>
        <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">Yamaha P-115</font>
        </font>
    </strong>
    <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;"> en su región:</font>
    </font>
</p>
<div class="buy-buttons1"><span class="buy-buttons1">
        <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">EE. UU.:</font>
        </font>
    </span>
    <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;"> ( </font>
    </font><span id="su_tooltip_637a34ef6ed6a_button" class="su-tooltip-button su-tooltip-button-outline-yes"
        aria-describedby="su_tooltip_637a34ef6ed6a"
        data-settings="{&quot;position&quot;:&quot;top&quot;,&quot;behavior&quot;:&quot;hover&quot;,&quot;hideDelay&quot;:0}"
        tabindex="0"><em>
            <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">De qué minorista comprar</font>
            </font>
        </em> <i class="fa fa-question-circle" style="color: #08a557;"></i> </span><span
        style="display:none;z-index:100" id="su_tooltip_637a34ef6ed6a" class="su-tooltip" role="tooltip"><span
            class="su-tooltip-inner su-tooltip-shadow-no"
            style="z-index:100;background:#FFFFFF;color:#333333;font-size:14px;border-radius:5px;text-align:left;max-width:300px;line-height:1.25"><span
                class="su-tooltip-title"><strong>What Retailer to Buy From?</strong></span><span
                class="su-tooltip-content su-u-trim">As you can see, there are plenty of good places where you can buy
                this item. My personal favorite is <strong>Sweetwater</strong>.<br class="b1"><br class="b1">Being one
                of the<em> oldest</em> and <em>most reputable</em> music retailers in the US, it offers exceptional
                customer service, competitive prices, fast shipping, and overall the best experience I’ve ever had
                shopping for audio equipment.<br class="b1"><br class="b1">Many of my fellow musicians share the same
                opinion and regard Sweetwater as their go-to music store.</span></span><span
            id="su_tooltip_637a34ef6ed6a_arrow" class="su-tooltip-arrow" style="z-index:100;background:#FFFFFF"
            data-popper-arrow=""></span></span>
    <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;">)</font>
    </font><br>
    <a href="https://guitar-center.pxf.io/c/2224761/1125892/14264?u=https://www.guitarcenter.com/Used/Yamaha/P115-Digital-Piano.gc"
        target="_blank" rel="noopener nofollow noreferrer">
        <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">Centro de guitarra</font>
        </font>
    </a> <a href="https://www.amazon.com/Yamaha-88-Key-Weighted-Digital-Sustain/dp/B00UHBGE7A/?tag=buy-button-20"
        target="_blank" rel="noopener nofollow noreferrer">
        <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">Amazonas</font>
        </font>
    </a>
</div>
<div class="buy-buttons2"><span class="buy-buttons2">
        <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">Reino Unido y Europa:</font>
        </font>
    </span><br>
    <a href="https://www.amazon.co.uk/Yamaha-P115-Digital-Piano-Black-x/dp/B00UNEECDY/?tag=buy-buttons-21"
        target="_blank" rel="noopener nofollow noreferrer">
        <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">Amazon UK</font>
        </font>
    </a> <a
        href="https://www.awin1.com/cread.php?awinmid=1117&amp;awinaffid=784167&amp;ued=https://www.gear4music.com/Keyboards-and-Pianos/Yamaha-P125-Digital-Piano-Black/29E6"
        target="_blank" rel="noopener nofollow noreferrer">
        <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">Gear4music</font>
        </font>
    </a> <a href="https://www.thomann.de/intl/yamaha_p_125_bk.htm?offid=1&amp;affid=553" target="_blank"
        rel="noopener nofollow noreferrer">
        <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">Thomann</font>
        </font>
    </a>
</div>
<div class="su-divider su-divider-style-default" style="margin:30px 0;border-width:8px;border-color:#08a557"></div>
<h2 style="margin-bottom: 20px;"><span id="Design"><strong><span style="border-bottom: 4px solid #ffb730;">
                <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">Diseño</font>
                </font>
            </span> </strong></span></h2>
<p>
    <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;">El P-115 es un piano digital portátil con un diseño </font>
    </font><strong>
        <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">compacto</font>
        </font>
    </strong>
    <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;"> . </font>
        <font style="vertical-align: inherit;">El tamaño del piano es muy similar al de su hermano menor, el P-45.
        </font>
    </font>
</p>
<p>
    <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;">El P-115 mide </font>
    </font><em><strong>
            <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">52,2</font>
            </font>
        </strong></em>
    <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;"> pulgadas de ancho, </font>
    </font><strong><em>
            <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">11,6</font>
            </font>
        </em></strong>
    <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;"> pulgadas de profundidad y </font>
    </font><strong>
        <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">6,4</font>
        </font>
    </strong>
    <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;"> pulgadas de alto (sin soporte).</font>
    </font>
</p>
<p>
    <font style="vertical-align: inherit;"></font><span style="text-decoration: underline;">
        <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">El piano puede caber</font>
        </font>
    </span>
    <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;"> fácilmente en una habitación pequeña </font>
        <font style="vertical-align: inherit;">sin ocupar demasiado espacio en el piso. </font>
        <font style="vertical-align: inherit;">Incluso puede poner el teclado en un escritorio para conectarlo a una
            computadora, por ejemplo.</font>
    </font>
</p>
<p>
    <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;">Por supuesto, hubiera sido mucho más conveniente tener un </font>
    </font><strong>
        <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">soporte dedicado</font>
        </font>
    </strong>
    <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;"> para el instrumento.</font>
    </font>
</p>
<p>
    <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;">El P-115 no viene con ningún tipo de soporte, por lo que tendrás que
            comprarlo por separado. </font>
        <font style="vertical-align: inherit;">Puede ser un soporte tipo X o el soporte de mueble </font>
    </font><a href="https://www.amazon.com/Yamaha-L85-Keyboard-Stand-Black/dp/B001MLYWV4/?tag=pdreamers-20"
        target="_blank" rel="noopener nofollow noreferrer">
        <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">L85</font>
        </font>
    </a>
    <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;"> que ofrece Yamaha para el modelo P115 (ver sección “ </font>
    </font><strong><em>
            <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">Accesorios</font>
            </font>
        </em></strong>
    <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;"> ”).</font>
    </font>
</p>
<p><a href="https://www.amazon.com/Yamaha-P115-Key-Digital-Piano/dp/B00UHBGE7A/?tag=pdreamers-20" target="_blank"
        rel="noopener nofollow noreferrer"><img decoding="async" class="size-full wp-image-1326 aligncenter"
            src="https://cdn.pianodreamers.com/wp-content/uploads/2017/07/yamaha-p115-view.jpg"
            alt="Yamaha P-115 revisión" width="620" height="595"> </a></p>
<p><strong>
        <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">Eche un vistazo a la siguiente tabla para comparar rápidamente el
                tamaño del P-115 con otros pianos digitales populares:</font>
        </font>
    </strong></p>
<div class="supsystic-table-loader spinner" style="background-color:#000000"></div>
<div id="supsystic-table-5_93418" class="supsystic-tables-wrap " style=" width:100% "
    data-table-width-fixed="100%" data-table-width-mobile="100%">
    <table id="supsystic-table-5" class="supsystic-table border lightboxImg no-border" data-id="5"
        data-view-id="5_93418" data-title="Yamaha P115 comparison table" data-currency-format="$1,000.00"
        data-percent-format="10.00%" data-date-format="DD.MM.YYYY" data-time-format="HH:mm"
        data-features="[&quot;ordering&quot;,&quot;after_table_loaded_script&quot;]" data-search-value=""
        data-lightbox-img="" data-head="on" data-head-rows-count="1" data-pagination-length="50,100,All"
        data-auto-index="off"
        data-searching-settings="{&quot;columnSearchPosition&quot;:&quot;bottom&quot;,&quot;minChars&quot;:&quot;0&quot;}"
        data-sort-column="1" data-sort-order="asc" data-multiple-sorting="[]" data-disable-sorting="[]"
        data-lang="default"
        data-override="{&quot;emptyTable&quot;:&quot;&quot;,&quot;info&quot;:&quot;&quot;,&quot;infoEmpty&quot;:&quot;&quot;,&quot;infoFiltered&quot;:&quot;&quot;,&quot;lengthMenu&quot;:&quot;&quot;,&quot;search&quot;:&quot;&quot;,&quot;zeroRecords&quot;:&quot;&quot;,&quot;exportLabel&quot;:&quot;&quot;,&quot;file&quot;:&quot;default&quot;}"
        data-merged="[]" data-responsive-mode="1" data-from-history="0">
        <thead>
            <tr>
                <th data-cell-id="A1" data-x="0" data-y="1" data-db-index="1"
                    class="htCenter htLeft htCenter color-ffffff bg-faa720" data-cell-type="text"
                    data-original-value="<b>View on Amazon</b><span class=&quot;dashicons dashicons-arrow-down-alt&quot;></span>"
                    data-order="<b>View on Amazon</b><span class=&quot;dashicons dashicons-arrow-down-alt&quot;></span>"
                    style="min-width:50.6472%; "><b>
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">Ver en Amazon</font>
                        </font>
                    </b><span class="dashicons dashicons-arrow-down-alt"></span></th>
                <th data-cell-id="B1" data-x="1" data-y="1" data-db-index="1" class="color-ffffff bg-344277"
                    data-cell-type="text" data-original-value="Keys" data-order="Keys" style="min-width:7.9288%; ">
                    <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">Llaves</font>
                    </font>
                </th>
                <th data-cell-id="C1" data-x="2" data-y="1" data-db-index="1" class="color-ffffff bg-344277"
                    data-cell-type="text" data-original-value="Width" data-order="Width" style="min-width:9.7087%; ">
                    <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">Ancho</font>
                    </font>
                </th>
                <th data-cell-id="D1" data-x="3" data-y="1" data-db-index="1" class="color-ffffff bg-344277"
                    data-cell-type="text" data-original-value="Depth" data-order="Depth" style="min-width:11.0032%; ">
                    <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">Profundidad</font>
                    </font>
                </th>
                <th data-cell-id="E1" data-x="4" data-y="1" data-db-index="1" class="color-ffffff bg-344277"
                    data-cell-type="text" data-original-value="Height" data-order="Height" style="min-width:10.0324%; ">
                    <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">Altura</font>
                    </font>
                </th>
                <th data-cell-id="F1" data-x="5" data-y="1" data-db-index="1" class="color-ffffff bg-344277"
                    data-cell-type="text" data-original-value="Weight" data-order="Weight" style="min-width:10.6796%; ">
                    <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">Peso</font>
                    </font>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr style="height:93px">
                <td data-cell-id="A2" data-x="0" data-y="2" data-db-index="2" class="bold" data-cell-type="text"
                    data-original-value="<a href=&quot;https://www.amazon.com/Yamaha-P115-Key-Digital-Piano/dp/B00UHBGE7A/?tag=comp-table-20&quot; target=&quot;_blank&quot; rel=&quot;noopener nofollow&quot;><img class=&quot;aligncenter wp-image-444&quot; src=&quot;https://www.pianodreamers.com/wp-content/uploads/2017/07/yamaha-p115-table.jpg&quot; /></a>"
                    data-order="<a href=&quot;https://www.amazon.com/Yamaha-P115-Key-Digital-Piano/dp/B00UHBGE7A/?tag=comp-table-20&quot; target=&quot;_blank&quot; rel=&quot;noopener nofollow&quot;><img class=&quot;aligncenter wp-image-444&quot; src=&quot;https://www.pianodreamers.com/wp-content/uploads/2017/07/yamaha-p115-table.jpg&quot; /></a>">
                    <a href="https://www.amazon.com/Yamaha-P115-Key-Digital-Piano/dp/B00UHBGE7A/?tag=comp-table-20"
                        target="_blank" rel="noopener nofollow"><img class="aligncenter wp-image-444 entered lazyloaded"
                            src="https://cdn.pianodreamers.com/wp-content/uploads/2017/07/yamaha-p115-table.jpg"
                            data-lazy-src="https://cdn.pianodreamers.com/wp-content/uploads/2017/07/yamaha-p115-table.jpg"
                            data-ll-status="loaded"><noscript><img class="aligncenter wp-image-444"
                                src="https://cdn.pianodreamers.com/wp-content/uploads/2017/07/yamaha-p115-table.jpg" /></noscript></a>
                </td>
                <td data-cell-id="B2" data-x="1" data-y="2" data-db-index="2" class="" data-cell-type="text"
                    data-cell-format-type="number" data-original-value="88" data-order="88">
                    <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">88</font>
                    </font>
                </td>
                <td data-cell-id="C2" data-x="2" data-y="2" data-db-index="2" class="" data-cell-type="text"
                    data-original-value="52.2&quot;" data-order="52.2&quot;">
                    <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">52,2"</font>
                    </font>
                </td>
                <td data-cell-id="D2" data-x="3" data-y="2" data-db-index="2" class="" data-cell-type="text"
                    data-original-value="11.6&quot;" data-order="11.6&quot;">
                    <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">11,6"</font>
                    </font>
                </td>
                <td data-cell-id="E2" data-x="4" data-y="2" data-db-index="2" class="" data-cell-type="text"
                    data-original-value="6.4&quot;" data-order="6.4&quot;">
                    <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">6.4"</font>
                    </font>
                </td>
                <td data-cell-id="F2" data-x="5" data-y="2" data-db-index="2" class="" data-cell-type="text"
                    data-original-value="26 lbs" data-order="26 lbs">
                    <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">26 libras</font>
                    </font>
                </td>
            </tr>
            <tr>
                <td data-cell-id="A3" data-x="0" data-y="3" data-db-index="3" class="" data-cell-type="text"
                    data-original-value="<a href=&quot;https://www.amazon.com/Casio-Privia-PX-160BK-88-Key-Digital/dp/B0100RBPTC/?tag=comp-table-20&quot; target=&quot;_blank&quot; rel=&quot;noopener nofollow&quot;><img class=&quot;aligncenter wp-image-444&quot; src=&quot;https://www.pianodreamers.com/wp-content/uploads/2019/12/casio-px160-comp.jpg&quot; /></a>"
                    data-order="<a href=&quot;https://www.amazon.com/Casio-Privia-PX-160BK-88-Key-Digital/dp/B0100RBPTC/?tag=comp-table-20&quot; target=&quot;_blank&quot; rel=&quot;noopener nofollow&quot;><img class=&quot;aligncenter wp-image-444&quot; src=&quot;https://www.pianodreamers.com/wp-content/uploads/2019/12/casio-px160-comp.jpg&quot; /></a>">
                    <a href="https://www.amazon.com/Casio-Privia-PX-160BK-88-Key-Digital/dp/B0100RBPTC/?tag=comp-table-20"
                        target="_blank" rel="noopener nofollow"><img class="aligncenter wp-image-444 entered lazyloaded"
                            src="https://cdn.pianodreamers.com/wp-content/uploads/2019/12/casio-px160-comp.jpg"
                            data-lazy-src="https://cdn.pianodreamers.com/wp-content/uploads/2019/12/casio-px160-comp.jpg"
                            data-ll-status="loaded"><noscript><img class="aligncenter wp-image-444"
                                src="https://cdn.pianodreamers.com/wp-content/uploads/2019/12/casio-px160-comp.jpg" /></noscript></a>
                </td>
                <td data-cell-id="B3" data-x="1" data-y="3" data-db-index="3" class="" data-cell-type="text"
                    data-cell-format-type="number" data-original-value="88" data-order="88">
                    <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">88</font>
                    </font>
                </td>
                <td data-cell-id="C3" data-x="2" data-y="3" data-db-index="3" class="" data-cell-type="text"
                    data-cell-format-type="number" data-original-value="52.0&quot;" data-order="52.0&quot;">
                    <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">52,0"</font>
                    </font>
                </td>
                <td data-cell-id="D3" data-x="3" data-y="3" data-db-index="3" class="" data-cell-type="text"
                    data-cell-format-type="number" data-original-value="11.5&quot;" data-order="11.5&quot;">
                    <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">11,5"</font>
                    </font>
                </td>
                <td data-cell-id="E3" data-x="4" data-y="3" data-db-index="3" class="" data-cell-type="text"
                    data-cell-format-type="number" data-original-value="5.5&quot;" data-order="5.5&quot;">
                    <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">5.5"</font>
                    </font>
                </td>
                <td data-cell-id="F3" data-x="5" data-y="3" data-db-index="3" class="" data-cell-type="text"
                    data-cell-format-type="number" data-original-value="24.5 lbs" data-order="24.5 lbs">
                    <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">24.5 libras</font>
                    </font>
                </td>
            </tr>
            <tr>
                <td data-cell-id="A4" data-x="0" data-y="4" data-db-index="4" class="" data-cell-type="text"
                    data-original-value="<a href=&quot;https://www.amazon.com/Roland-88-Note-Digital-Pedalboard-FP-30-BKC/dp/B01B3FBDC4/?tag=comp-table-20&quot; target=&quot;_blank&quot; rel=&quot;noopener nofollow&quot;><img class=&quot;aligncenter wp-image-444&quot; src=&quot;https://www.pianodreamers.com/wp-content/uploads/2017/07/roland-fp30-table.jpg&quot; /></a>"
                    data-order="<a href=&quot;https://www.amazon.com/Roland-88-Note-Digital-Pedalboard-FP-30-BKC/dp/B01B3FBDC4/?tag=comp-table-20&quot; target=&quot;_blank&quot; rel=&quot;noopener nofollow&quot;><img class=&quot;aligncenter wp-image-444&quot; src=&quot;https://www.pianodreamers.com/wp-content/uploads/2017/07/roland-fp30-table.jpg&quot; /></a>">
                    <a href="https://www.amazon.com/Roland-88-Note-Digital-Pedalboard-FP-30-BKC/dp/B01B3FBDC4/?tag=comp-table-20"
                        target="_blank" rel="noopener nofollow"><img class="aligncenter wp-image-444 entered lazyloaded"
                            src="https://cdn.pianodreamers.com/wp-content/uploads/2017/07/roland-fp30-table.jpg"
                            data-lazy-src="https://cdn.pianodreamers.com/wp-content/uploads/2017/07/roland-fp30-table.jpg"
                            data-ll-status="loaded"><noscript><img class="aligncenter wp-image-444"
                                src="https://cdn.pianodreamers.com/wp-content/uploads/2017/07/roland-fp30-table.jpg" /></noscript></a>
                </td>
                <td data-cell-id="B4" data-x="1" data-y="4" data-db-index="4" class="" data-cell-type="text"
                    data-cell-format-type="number" data-original-value="88" data-order="88">
                    <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">88</font>
                    </font>
                </td>
                <td data-cell-id="C4" data-x="2" data-y="4" data-db-index="4" class="" data-cell-type="text"
                    data-cell-format-type="number" data-original-value="51.2&quot;" data-order="51.2&quot;">
                    <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">51,2"</font>
                    </font>
                </td>
                <td data-cell-id="D4" data-x="3" data-y="4" data-db-index="4" class="" data-cell-type="text"
                    data-cell-format-type="number" data-original-value="11.2&quot;" data-order="11.2&quot;">
                    <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">11,2"</font>
                    </font>
                </td>
                <td data-cell-id="E4" data-x="4" data-y="4" data-db-index="4" class="" data-cell-type="text"
                    data-cell-format-type="number" data-original-value="5.8&quot;" data-order="5.8&quot;">
                    <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">5.8"</font>
                    </font>
                </td>
                <td data-cell-id="F4" data-x="5" data-y="4" data-db-index="4" class="" data-cell-type="text"
                    data-cell-format-type="number" data-original-value="31 lbs" data-order="31 lbs">
                    <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">31 libras</font>
                    </font>
                </td>
            </tr>
            <tr>
                <td data-cell-id="A5" data-x="0" data-y="5" data-db-index="5" class="" data-cell-type="text"
                    data-original-value="<a href=&quot;https://www.amazon.com/Kawai-ES110-Portable-Digital-Piano/dp/B01N7WBESD/?tag=comp-table-20&quot; target=&quot;_blank&quot; rel=&quot;noopener nofollow&quot;><img class=&quot;aligncenter wp-image-444&quot; src=&quot;https://www.pianodreamers.com/wp-content/uploads/2017/07/kawai-es110-table2.jpg&quot; /></a>"
                    data-order="<a href=&quot;https://www.amazon.com/Kawai-ES110-Portable-Digital-Piano/dp/B01N7WBESD/?tag=comp-table-20&quot; target=&quot;_blank&quot; rel=&quot;noopener nofollow&quot;><img class=&quot;aligncenter wp-image-444&quot; src=&quot;https://www.pianodreamers.com/wp-content/uploads/2017/07/kawai-es110-table2.jpg&quot; /></a>">
                    <a href="https://www.amazon.com/Kawai-ES110-Portable-Digital-Piano/dp/B01N7WBESD/?tag=comp-table-20"
                        target="_blank" rel="noopener nofollow"><img class="aligncenter wp-image-444 entered lazyloaded"
                            src="https://cdn.pianodreamers.com/wp-content/uploads/2017/07/kawai-es110-table2.jpg"
                            data-lazy-src="https://cdn.pianodreamers.com/wp-content/uploads/2017/07/kawai-es110-table2.jpg"
                            data-ll-status="loaded"><noscript><img class="aligncenter wp-image-444"
                                src="https://cdn.pianodreamers.com/wp-content/uploads/2017/07/kawai-es110-table2.jpg" /></noscript></a>
                </td>
                <td data-cell-id="B5" data-x="1" data-y="5" data-db-index="5" class="" data-cell-type="text"
                    data-cell-format-type="number" data-original-value="88" data-order="88">
                    <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">88</font>
                    </font>
                </td>
                <td data-cell-id="C5" data-x="2" data-y="5" data-db-index="5" class="" data-cell-type="text"
                    data-cell-format-type="number" data-original-value="51.6&quot;" data-order="51.6&quot;">
                    <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">51,6"</font>
                    </font>
                </td>
                <td data-cell-id="D5" data-x="3" data-y="5" data-db-index="5" class="" data-cell-type="text"
                    data-cell-format-type="number" data-original-value="11.2&quot;" data-order="11.2&quot;">
                    <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">11,2"</font>
                    </font>
                </td>
                <td data-cell-id="E5" data-x="4" data-y="5" data-db-index="5" class="" data-cell-type="text"
                    data-cell-format-type="number" data-original-value="5.8&quot;" data-order="5.8&quot;">
                    <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">5.8"</font>
                    </font>
                </td>
                <td data-cell-id="F5" data-x="5" data-y="5" data-db-index="5" class="" data-cell-type="text"
                    data-cell-format-type="number" data-original-value="26.5 lbs" data-order="26.5 lbs">
                    <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">26.5 libras</font>
                    </font>
                </td>
            </tr>
            <tr>
                <td data-cell-id="A6" data-x="0" data-y="6" data-db-index="6" class="" data-cell-type="text"
                    data-original-value="<a href=&quot;https://www.amazon.com/Korg-Digital-Enhanced-Speaker-System/dp/B019360Y3O/?tag=comp-table-20&quot; target=&quot;_blank&quot; rel=&quot;noopener nofollow&quot;><img class=&quot;aligncenter wp-image-444&quot; src=&quot;https://www.pianodreamers.com/wp-content/uploads/2017/07/korg-b1-table.jpg&quot; /></a>"
                    data-order="<a href=&quot;https://www.amazon.com/Korg-Digital-Enhanced-Speaker-System/dp/B019360Y3O/?tag=comp-table-20&quot; target=&quot;_blank&quot; rel=&quot;noopener nofollow&quot;><img class=&quot;aligncenter wp-image-444&quot; src=&quot;https://www.pianodreamers.com/wp-content/uploads/2017/07/korg-b1-table.jpg&quot; /></a>">
                    <a href="https://www.amazon.com/Korg-Digital-Enhanced-Speaker-System/dp/B019360Y3O/?tag=comp-table-20"
                        target="_blank" rel="noopener nofollow"><img class="aligncenter wp-image-444 entered lazyloaded"
                            src="https://cdn.pianodreamers.com/wp-content/uploads/2017/07/korg-b1-table.jpg"
                            data-lazy-src="https://cdn.pianodreamers.com/wp-content/uploads/2017/07/korg-b1-table.jpg"
                            data-ll-status="loaded"><noscript><img class="aligncenter wp-image-444"
                                src="https://cdn.pianodreamers.com/wp-content/uploads/2017/07/korg-b1-table.jpg" />
`;

const Previewer = () => {
  const router = useRouter();
  const {
    data: { project },
  } = useProjectContext();
  const { post, setPost } = usePostContext();
  const { id, idx } = router.query;

  useEffect(() => {
    console.log('router', router);
    if (project.name !== 'No' && id) {
      ProjectApi.getPost(project.id as string, id as string).then((res) => {
        console.log('res', res);
        setPost(res);
      });
    } else if (project.name !== 'No' && idx) {
      ProjectApi.getPostByIdx(project.id as string, Number(idx)).then((res) => {
        console.log('res', res);
        setPost(res);
      });
    }
  }, []);

  return (
    <PageContent>
      Previewer
      <VStack justify="center">
        <Box>Previewer: {id || idx || post.idx || 'No'}</Box>
        <Box>
          {/* <div dangerouslySetInnerHTML={{ __html: postHtml }} /> */}
          <Box> Title: {post.title}</Box>
          <Box> Outline: {post.outline}</Box>
          <Box> {post.content} </Box>
        </Box>
      </VStack>
    </PageContent>
  );
};

Previewer.getLayout = (page: ReactElement) => {
  return <ShellWithGroupedMenu>{page}</ShellWithGroupedMenu>;
};

export default Previewer;
