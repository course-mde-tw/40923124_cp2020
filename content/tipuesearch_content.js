var tipuesearch = {"pages": [{'title': 'About', 'text': '\n 這個倉儲位於\xa0 https://github.com/mdecourse/cmstemplate \xa0是一個能夠與 Github Pages, Gitlab Pages 以及 Heroku 結合的網際內容管理系統. \n \n', 'tags': '', 'url': 'About.html'}, {'title': '亂數分組', 'text': '', 'tags': '', 'url': '亂數分組.html'}, {'title': '第二組', 'text': '', 'tags': '', 'url': '第二組.html'}, {'title': 'github', 'text': '40623219 \xa0 \xa0  40923101 \n 40923104 \xa0\xa0 \xa0  40923107 \n 40923115 \xa0\xa0\xa0\xa0\xa0  40923124 \n 40923125 \xa0\xa0\xa0\xa0  40923136 \n 40923142 \xa0\xa0\xa0\xa0  40923151 \n 40923152 \n \n', 'tags': '', 'url': 'github.html'}, {'title': '靜態網站', 'text': '40623219 \xa0\xa0\xa0\xa0  40923101 \n 40923104 \xa0\xa0\xa0\xa0  40923107 \n 40923115 \xa0\xa0\xa0\xa0\xa0  40923124 \n 40923125 \xa0\xa0\xa0\xa0  40923136 \n 40923142 \xa0\xa0\xa0\xa0  40923151 \n 40923152', 'tags': '', 'url': '靜態網站.html'}, {'title': 'Hint', 'text': '\n 是否了解如何設定 Github Pages? \n 是否了解如何設定 Gitlab Pages? \n 是否了解如何設定 Heroku? \n \n 作業一的目的: \n \n 閱讀與電腦軟硬體相關的英文資料, 藉以了解英文相關術語 \n 了解電腦與網路相關設定 \n 了解如何使用 Git, Github 與 CMSiMDE \n \n 作業二的目的: \n \n 實際了解 Python 程式在課程推動上的應用 \n 了解如何從網站超文件資料中擷取所要的資料 \n 使用 Kaggle 與近端 SciTE 開發 Python 程式 \n \n 作業三的目的: \n \n 著手利用 Python 解決各類問題 \n 利用 Python 修改 Solidworks 與 Inventor 零件尺寸 \n \n', 'tags': '', 'url': 'Hint.html'}, {'title': 'gitlab-ci.yml', 'text': '標題不能使用 .gitlab-ci.yml 因為轉為 content/.gitlab-ci.yml 時, 無法從 content/.github-ci.yml 呼叫. \n .gitlab-ci.yml 是在 Gitlab Pages 設定過程中將靜態網頁轉存並伺服的 continuout integration 設定檔案. \n pages:\n  stage: deploy\n  script:\n  - mkdir .public\n  - cp -r * .public\n  - mv .public public\n  artifacts:\n    paths:\n    - public\n  only:\n  - master\nvariables:\n  GIT_SUBMODULE_STRATEGY: recursive \n', 'tags': '', 'url': 'gitlab-ci.yml.html'}, {'title': 'CMSiMDE', 'text': '網際內容管理系統 \n Web-based Content Management System \n https://learnmech.com/ \n https://www.instructables.com/ \xa0\xa0 \n https://imechanica.org/ \xa0 \n https://info.traceparts.com/use-and-manage-3d-cad-models/download-free-cad-models/ \xa0 \n https://bookboon.com/en \xa0 \n \n', 'tags': '', 'url': 'CMSiMDE.html'}, {'title': 'CMSiMDE 程式架構', 'text': '動態網頁的主要檔案為 config/content.htm \n 當使用者在命令列中將目錄更換到 cmsimde, 然後以 python wsgi.py 執行 wsgi.py 程式時, 其實 Python 程式是仰賴 Flask 網際框架結構來進行資料伺服. \n CMSiMDE 的作動需要 Flask 網際框架, 需要 bs4 與 lxml 進行 content.htm 的頁面解讀, 透過超文件檔案中的 h1, h2 與 h3 由上到下執行循序式分頁, 之後再透過 Javascript 與 css 將 h1, h2, h3 依照樹狀結構, h1 標題為第一階, h2 為第二階, h3 為第三階. \n', 'tags': '', 'url': 'CMSiMDE 程式架構.html'}, {'title': '為何需要網際內容管理', 'text': '全球資訊網無遠弗屆, 而且 WWW 的伺服架構相對於手機 APP 對於使用者而言更加友善, 除了允許多重身分無需實名綁定之外, 可以讓工程師進行各種協同設計, 因此若能廣泛利用網際環境建立各種應用程式環境, 將有助提升設計效益. \n', 'tags': '', 'url': '為何需要網際內容管理.html'}, {'title': '如何建立 CMSiMDE 子模組', 'text': 'git submodule add  https://github.com/mdecourse/cmsimde.git \xa0cmsimde \n 表示要透過 git submodule add 將  https://github.com/mdecourse/cmsimde.git \xa0遠端倉儲當作子模組, 而且將資料存入子目錄 cmsimde 中. \n', 'tags': '', 'url': '如何建立 CMSiMDE 子模組.html'}, {'title': '為何需要以子模組的設計', 'text': '在一個倉儲中帶有子模組的用意是善用分散式設計的做法, 子模組代表一個非由倉儲管理者維護權限所及的單位模組. 意即, 倉儲中程式的執行需要子模組中的資料, 但是倉儲擁有者將子模組視為獨立元件, 並不需要對子模組的內容進行改版. 一旦子模組原始倉儲資料更新, 採用子模組的各倉儲所有者可以決定是否配合跟進, 若不跟進仍有使用既有版本的子模組繼續運作, 原始子模組與採用不同版本子模組的倉儲都不會彼此受到影響. \n', 'tags': '', 'url': '為何需要以子模組的設計.html'}, {'title': '兩種不同的 git clone', 'text': 'git clone  https://github.com/mdecourse/cmsimde.git \n 表示要將 cmsimde 倉儲的資料 clone 到近端, 針對沒有子模組設置的倉儲可以直接以 git clone 取下倉儲資料 \n git clone --recurse-submodules  https://github.com/mdecourse/cp2020.git \n 表示要將 cp2020 倉儲中包含個子模組與可能子模組中的子模組等資料, 全部 clone 到近端. \n', 'tags': '', 'url': '兩種不同的 git clone.html'}, {'title': '假如 CMSiMDE 不設為子模組', 'text': '其實各用戶若希望自行維護 CMSiMDE 網際內容管理系統, 可以直接取下 CMSiMDE 程式資料, 然後將倉儲資料放在 cmsimde 子目錄中, 並將 up_dir 中的資料複製一份到倉儲根目錄, 如此就可以依 CMSiMDE 的用法使用動態與靜態網頁. \n', 'tags': '', 'url': '假如 CMSiMDE 不設為子模組.html'}, {'title': '為何需要有動態網頁與靜態網頁', 'text': '所謂的動態網頁指的是有登入系統配置的網際內容管理系統, 當使用者登入後進行內容管理, 網站會馬上呈現新版本內容, 通常無需進行網頁轉換. \n 所謂的靜態網頁則指網站通常沒有登入系統的配置, 而且通常只包含 html 與 Javascript 資料, 由於沒有登入系統, 因此沒有內容被駭的問題, 除非負責伺服超文件網頁的系統遭駭. \n 而 CMSiMDE 的動態網頁用於編輯網站內容, 而靜態網頁則可以利用 Github Pages, Gitlab Pages 與 Heroku 進行伺服. \n', 'tags': '', 'url': '為何需要有動態網頁與靜態網頁.html'}, {'title': 'CMSiMDE 有甚麼使用上的限制嗎比方說能夠使用那些特殊符號, 為什麼不能使用分號, 以及所謂的標題有沒有最多幾個字元的限制, 另外就是假如標題過長, 會發生甚麼狀況與後果', 'text': '假如在上列頁面標題中加上兩個 "?", 上面這個標題就無法順利分頁, 但是利用 SciTE 編輯 config/content.htm 之後將兩個 "?" 刪除後則可以正確完成分頁. \n 上面的標題字元數超過 80 個, 雖可正常分頁但是在資料展示上就顯得不很方便. \n CMSiMDE 標題不能使用 ":" 的原因在於 Windows 操作系統不允許檔案名稱中有 ":", 因此當 CMSiMDE 動態轉靜態時必須以頁面標題作為該頁的檔案名稱, 而無法完成靜態頁面存檔的問題會讓 CMSiMDE 無法順利將動態資料轉為靜態資料. \n', 'tags': '', 'url': 'CMSiMDE 有甚麼使用上的限制嗎比方說能夠使用那些特殊符號, 為什麼不能使用分號, 以及所謂的標題有沒有最多幾個字元的限制, 另外就是假如標題過長, 會發生甚麼狀況與後果.html'}]};