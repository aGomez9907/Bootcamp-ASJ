class ShopHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = '         <header>     <h1 class="header-name">BOUTIQUE</h1>        <nav class="nav-menu">          <ul class="nav-menu-list">            <li><a href="" class="nav-menu-item">HOME</a></li>            <li><a href="" class="nav-menu-item">SHOP</a></li>            <li>              <a href="" class="nav-menu-item">DEMOS</a              ><select ></select>            </li>            <li>              <a href="" class="nav-menu-item">BLOCKS</a              ><select ></select>            </li>            <li><a href="" class="nav-menu-item">COMPONENTS</a></li>            <li><a href="" class="nav-menu-item">CONTACT US</a></li>            <li><a href="" class="nav-menu-item">MY CART</a></li>          </ul>        </nav>      </header>'
    //     <header>
    //     <h1 class="header-name">BOUTIQUE</h1>
    //     <nav class="nav-menu">
    //       <ul class="nav-menu-list">
    //         <li><a href="" class="nav-menu-item">HOME</a></li>
    //         <li><a href="" class="nav-menu-item">SHOP</a></li>
    //         <li>
    //           <a href="" class="nav-menu-item">DEMOS</a
    //           ><select ></select>
    //         </li>
    //         <li>
    //           <a href="" class="nav-menu-item">BLOCKS</a
    //           ><select ></select>
    //         </li>
    //         <li><a href="" class="nav-menu-item">COMPONENTS</a></li>
    //         <li><a href="" class="nav-menu-item">CONTACT US</a></li>
    //         <li><a href="" class="nav-menu-item">MY CART</a></li>
    //       </ul>
    //     </nav>
    //   </header>
    }
}

customElements.define('shop-header', ShopHeader)