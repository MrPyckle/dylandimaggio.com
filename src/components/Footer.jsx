import footer from './footer.module.scss';

export default function Footer() {
  return (
    <>
      <footer>
        <div className={`wrapper ${footer.wrapper}`}>
          <ul className={footer.social}>
            <li><a target="_blank" href="https://www.imdb.com/name/nm4607499/">IMDB</a></li>
            <li><a target="_blank" href="https://www.linkedin.com/in/dylan-dimaggio-92aa6b35/">LinkedIn</a></li>
            <li><a target="_blank" href="https://x.com/dylan_dimaggio">Twitter</a></li>
          </ul>
          <p><a className={footer.email} href="mailto:dylan@dylandimaggio.com">dylan@dylandimaggio.com</a></p>
          <p className={footer.caption}>© {new Date().getFullYear()} Dylan DiMaggio</p>
          {/* <p className={footer.caption}>Made with love by <a href="https://www.ruckuslabs.co"><svg className={footer.ruckusLogo} xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="75px" height="16px" viewBox="0 0 75 16" version="1.1">
            <title>Ruckus Labs</title>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g transform="translate(-30.000000, -30.000000)" fill="#272727" fill-rule="nonzero">
                <g id="Group" transform="translate(30.000000, 30.000000)">
                  <path d="M4.12440381,0 C4.30077834,0 4.4360952,0.154688602 4.41053535,0.327148964 L3.55572604,6.09251372 C3.50460634,6.43743444 3.77518222,6.74681165 4.1279313,6.74681165 L5.76665314,6.74681165 C5.94863696,6.74681165 6.08539951,6.910929 6.05041374,7.08744658 L4.33587977,15.7396081 C4.26278553,16.1085292 3.71833758,16.0761858 3.69052245,15.7012074 L3.1957485,9.02262555 C3.18470341,8.87336562 3.05892812,8.75782061 2.90747733,8.75776347 L0.578119069,8.75673488 C0.227336139,8.75662059 -0.0425458156,8.45032916 0.00556684486,8.10695132 L1.1066644,0.246518887 C1.12649931,0.105201964 1.24868927,0 1.39308508,0 L4.12440381,0 Z" id="Path" />
                  <path d="M20.0820408,0.0162520466 C20.2589564,0.0162520466 20.3951709,0.168839755 20.3709135,0.340436706 C20.1188934,2.12148291 18.9050332,10.7017301 18.6537128,12.4997305 C18.6299219,12.6700145 18.7650868,12.8212892 18.9406612,12.821175 C19.5560756,12.8210038 20.8479559,12.8205471 21.3960793,12.8203759 C21.5419734,12.8203188 21.6649513,12.7149973 21.6842523,12.5734269 C21.7925941,11.7793772 23.3773123,0.506382261 23.4075757,0.266454787 C23.4256521,0.123400243 23.5497379,0.0162520466 23.6969149,0.0162520466 L26.7164919,0.0162520466 C26.8936991,0.0162520466 27.0299136,0.169753112 27.0051897,0.341521317 L24.8215592,15.5088423 C24.7810331,15.7905558 24.5347857,16 24.2441637,16 L15.2166873,16 C14.8629727,16 14.5907187,15.6941396 14.6390585,15.3511169 L16.7665938,0.262630104 C16.7864778,0.121459359 16.9098056,0.0162520466 17.0554082,0.0162520466 L20.0820408,0.0162520466 Z M43.7929744,6.23885642 C43.8930944,6.23885642 43.9862753,6.18850761 44.0396299,6.10556338 L47.7870449,0.282798169 C47.8938123,0.116909699 48.080116,0.016269172 48.2804143,0.016269172 L50.8560113,0.016269172 C51.3173097,0.016269172 51.5961529,0.515590041 51.3466984,0.895489479 C50.2931352,2.5001436 48.0608734,5.89800299 46.908473,7.63589308 C46.7445608,7.88312741 46.736164,8.08212507 46.8407739,8.34460104 C47.5459872,10.113374 48.9442268,13.6565143 49.5622651,15.2237207 C49.7097919,15.5976834 49.4277416,15.999903 49.0182234,15.999903 L46.2331149,15.999903 C45.9906578,15.999903 45.7735659,15.8530808 45.6877321,15.6311351 L43.4816519,9.92448036 C43.4387933,9.8134504 43.3302182,9.74003932 43.2089897,9.74003932 L42.8117751,9.74003932 C42.6657643,9.74003932 42.5422616,9.84581748 42.5227858,9.98750199 L41.7667253,15.5028084 C41.7277735,15.7871479 41.479252,15.9989896 41.1862392,15.9976766 L38.6573493,15.9866593 C38.3045094,15.985118 38.0338881,15.679543 38.0823445,15.3373766 L40.1855641,0.492413607 C40.2255655,0.210186286 40.4720461,0 40.7631346,0 L43.293424,0 C43.6473718,0 43.9197425,0.306202943 43.8709945,0.64945393 L43.1190158,5.91392966 C43.0945252,6.08558369 43.2306814,6.23885642 43.4077719,6.23885642 L43.7929744,6.23885642 Z M37.9198376,4.08947046 C37.8929562,4.27910621 37.7707363,4.44288254 37.5944622,4.52571261 L34.9428276,5.77078949 C34.5211807,5.96938755 34.0443133,5.62550863 34.1132369,5.17248355 C34.2163891,4.49494389 34.3362765,3.68902049 34.3716713,3.37802242 C34.3909139,3.2089372 34.2556907,3.06114461 34.0818656,3.06114461 L31.8596916,3.06114461 C31.7141473,3.06114461 31.5908778,3.16623776 31.5708772,3.30735142 L30.2689091,12.4956089 C30.2445934,12.6672059 30.3807496,12.8202503 30.5577235,12.8202503 L32.7622293,12.8202503 C32.9078902,12.8202503 33.0312179,12.7152713 33.0510437,12.5739864 C33.0955933,12.2572798 33.2326241,11.2916902 33.3343185,10.5751616 C33.3911718,10.1751112 33.8427322,9.95790352 34.200995,10.158157 L36.4951248,11.4404532 C36.7016624,11.5559358 36.8158936,11.7825625 36.7837643,12.0132993 L36.3013573,15.4785188 C36.2619974,15.7613741 36.0152252,15.9723024 35.7236119,15.9723024 L27.1797087,15.9723024 C26.8257026,15.9723024 26.5533902,15.6660424 26.6021382,15.3227914 L28.7069905,0.506142504 C28.7469335,0.22494271 28.9916065,0.0152701878 29.2815871,0.0139572371 C30.4965552,0.0084770949 35.9185456,0.0135576434 37.8286392,0.0155556118 C38.1822954,0.0158981207 38.4539081,0.321872724 38.4052767,0.664838288 L37.9198376,4.08947046 Z M14.2959565,0.0210129201 L6.45610036,0.0163890501 C6.31102259,0.017359492 6.18874441,0.122623889 6.16921022,0.263395041 L5.8257001,2.73727963 C5.8018509,2.90859116 5.93794878,3.06112178 6.11457281,3.06112178 L10.4222399,3.06112178 C10.7759545,3.06112178 11.0482669,3.36658262 10.999927,3.70960527 C10.9118774,4.33428439 10.7073807,5.69735558 10.5969397,6.43026751 C10.5546059,6.7111248 10.3078337,6.91845684 10.0178531,6.91691555 C9.5260581,6.91434673 8.83676372,6.91097873 8.72527308,6.91194917 C8.60258673,6.9129767 8.48946338,6.95767411 8.4026383,7.03182728 C8.3157549,7.10598045 8.25505314,7.20953231 8.23715167,7.32838289 L7.8552729,10.0552103 C7.84057853,10.1601893 7.85597263,10.267052 7.89982251,10.3638679 L10.3512171,15.783386 C10.3997902,15.8815718 10.5013096,15.9440797 10.612742,15.9444222 L13.2993048,15.9439655 C13.5042097,15.9439085 13.645264,15.7426274 13.5711507,15.5555605 C13.1283953,14.4381823 11.8363984,11.0738888 11.5243179,10.261001 C11.4909057,10.1738325 11.5555143,10.0806701 11.6505612,10.0786722 C11.6510277,10.0786722 11.6514359,10.0786722 11.6518441,10.0786722 C12.3426545,10.0598342 12.8721767,9.87916072 13.250965,9.53505347 C13.6298116,9.19100329 13.8579243,8.68351929 13.9459156,8.01128852 C14.0592139,7.14622525 14.7290907,1.93341128 14.8751597,0.654996866 C14.9137616,0.316826427 14.6435484,0.0211841745 14.2959565,0.0210129201 Z M56.7410844,0.0162520466 C56.918,0.0162520466 57.0542145,0.168839755 57.0299571,0.340436706 C56.7779369,2.12148291 55.5640768,10.7017301 55.3127563,12.4997305 C55.2889655,12.6700145 55.4241304,12.8212892 55.5997048,12.821175 C56.2151191,12.8210038 57.5069994,12.8205471 58.0551229,12.8203759 C58.201017,12.8203188 58.3239949,12.7149973 58.3432958,12.5734269 C58.4516377,11.7793772 60.0363558,0.506382261 60.0666192,0.266454787 C60.0846957,0.123400243 60.2087815,0.0162520466 60.3559585,0.0162520466 L63.3755355,0.0162520466 C63.5527426,0.0162520466 63.6889571,0.169753112 63.6642333,0.341521317 L61.4806028,15.5088423 C61.4400766,15.7905558 61.1938293,16 60.9032072,16 L51.8757308,16 C51.5220163,16 51.2497622,15.6941396 51.298102,15.3511169 L53.4256373,0.262630104 C53.4455214,0.121459359 53.5688492,0.0162520466 53.7144517,0.0162520466 L56.7410844,0.0162520466 Z M74.5642626,3.70016344 C74.5351654,3.90538335 74.3947525,4.07903535 74.197428,4.15393063 L71.6421815,5.12385871 C71.227532,5.28129862 70.7927651,4.94449822 70.8538168,4.51322245 L71.0134723,3.38574028 C71.037788,3.21420042 70.9016318,3.06115603 70.7246579,3.06115603 L68.8443613,3.06115603 C68.6988753,3.06115603 68.5756058,3.16619209 68.5556052,3.30736284 L68.2465568,5.48817399 C68.2054476,5.77827901 68.3952499,6.05177236 68.685872,6.12118749 L73.544753,7.28183593 C73.835375,7.35125107 74.0251773,7.62474441 73.9841264,7.91479235 L72.9087549,15.5072439 C72.8687535,15.7895283 72.6222729,15.9997717 72.3311844,15.9997717 L63.8457088,15.9997717 C63.4914111,15.9997717 63.2189821,15.6929408 63.2683132,15.3494615 L63.7410988,12.0575515 C63.772062,11.8418851 63.9257115,11.6622391 64.1371472,11.5944795 L66.6483689,10.7899832 C67.058062,10.6587452 67.4665305,10.9929768 67.4073449,11.4109518 L67.2536371,12.4957345 C67.2293214,12.6673315 67.3654776,12.8203759 67.5423932,12.8203759 L69.4229814,12.8203759 C69.5685256,12.8203759 69.6917951,12.7153398 69.7117958,12.5741691 L70.0055666,10.5003348 C70.0464426,10.2120565 69.859206,9.93987613 69.571033,9.86852012 L64.7368758,8.67105197 C64.4487029,8.59969595 64.2614662,8.32745847 64.3023422,8.03918016 L65.3696085,0.508665653 C65.4096099,0.226438332 65.6560905,0.0162520466 65.947179,0.0162520466 L74.416794,0.0162520466 C74.7706835,0.0162520466 75.0429959,0.322397905 74.9943645,0.665591807 L74.5642626,3.70016344 Z" id="Shape" />
                </g>
              </g>
            </g>
          </svg></a></p> */}
        </div>
      </footer>
    </>
  )
}