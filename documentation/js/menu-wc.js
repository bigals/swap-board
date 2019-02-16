'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">swap-board documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link">AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminModule-284108956757bdcbc36f6564d2384060"' : 'data-target="#xs-components-links-module-AdminModule-284108956757bdcbc36f6564d2384060"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-284108956757bdcbc36f6564d2384060"' :
                                            'id="xs-components-links-module-AdminModule-284108956757bdcbc36f6564d2384060"' }>
                                            <li class="link">
                                                <a href="components/AdminBeersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminBeersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminDashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminDashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminProposalsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminProposalsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminUsersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminUsersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminRoutingModule.html" data-type="entity-link">AdminRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-834ba22b8ceaa3d6fb576ba4257ee936"' : 'data-target="#xs-components-links-module-AppModule-834ba22b8ceaa3d6fb576ba4257ee936"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-834ba22b8ceaa3d6fb576ba4257ee936"' :
                                            'id="xs-components-links-module-AppModule-834ba22b8ceaa3d6fb576ba4257ee936"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegisterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-c0c77cb75ed1c5773ece3c6b59eafab5"' : 'data-target="#xs-components-links-module-CoreModule-c0c77cb75ed1c5773ece3c6b59eafab5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-c0c77cb75ed1c5773ece3c6b59eafab5"' :
                                            'id="xs-components-links-module-CoreModule-c0c77cb75ed1c5773ece3c6b59eafab5"' }>
                                            <li class="link">
                                                <a href="components/SimpleDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SimpleDialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CoreModule-c0c77cb75ed1c5773ece3c6b59eafab5"' : 'data-target="#xs-injectables-links-module-CoreModule-c0c77cb75ed1c5773ece3c6b59eafab5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoreModule-c0c77cb75ed1c5773ece3c6b59eafab5"' :
                                        'id="xs-injectables-links-module-CoreModule-c0c77cb75ed1c5773ece3c6b59eafab5"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/BoardService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>BoardService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UserService</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-CoreModule-c0c77cb75ed1c5773ece3c6b59eafab5"' : 'data-target="#xs-pipes-links-module-CoreModule-c0c77cb75ed1c5773ece3c6b59eafab5"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-CoreModule-c0c77cb75ed1c5773ece3c6b59eafab5"' :
                                            'id="xs-pipes-links-module-CoreModule-c0c77cb75ed1c5773ece3c6b59eafab5"' }>
                                            <li class="link">
                                                <a href="pipes/OwnerNamePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OwnerNamePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/PackageSizePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PackageSizePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/PriceDivisorsPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PriceDivisorsPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/TeirsPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TeirsPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfileModule.html" data-type="entity-link">ProfileModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProfileModule-4378caa335a8dbe3a06d62f05a7ff345"' : 'data-target="#xs-components-links-module-ProfileModule-4378caa335a8dbe3a06d62f05a7ff345"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProfileModule-4378caa335a8dbe3a06d62f05a7ff345"' :
                                            'id="xs-components-links-module-ProfileModule-4378caa335a8dbe3a06d62f05a7ff345"' }>
                                            <li class="link">
                                                <a href="components/EditProfileComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewProfileComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ViewProfileComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfileRoutingModule.html" data-type="entity-link">ProfileRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProposalModule.html" data-type="entity-link">ProposalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProposalModule-f389b1035e8406fe1d362f782035892e"' : 'data-target="#xs-components-links-module-ProposalModule-f389b1035e8406fe1d362f782035892e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProposalModule-f389b1035e8406fe1d362f782035892e"' :
                                            'id="xs-components-links-module-ProposalModule-f389b1035e8406fe1d362f782035892e"' }>
                                            <li class="link">
                                                <a href="components/ProposalBoardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProposalBoardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProposalDetailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProposalDetailComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProposalRoutingModule.html" data-type="entity-link">ProposalRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SwapBoardModule.html" data-type="entity-link">SwapBoardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SwapBoardModule-7223affee6b2fb1eebfd741277a8d2ac"' : 'data-target="#xs-components-links-module-SwapBoardModule-7223affee6b2fb1eebfd741277a8d2ac"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SwapBoardModule-7223affee6b2fb1eebfd741277a8d2ac"' :
                                            'id="xs-components-links-module-SwapBoardModule-7223affee6b2fb1eebfd741277a8d2ac"' }>
                                            <li class="link">
                                                <a href="components/AddEditItemDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddEditItemDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ItemDetailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ItemDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainBoardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainBoardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProposeTradeDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProposeTradeDialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SwapBoardRoutingModule.html" data-type="entity-link">SwapBoardRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/SwapBoardUserModel.html" data-type="entity-link">SwapBoardUserModel</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BoardService.html" data-type="entity-link">BoardService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProposalService.html" data-type="entity-link">ProposalService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserInfoService.html" data-type="entity-link">UserInfoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link">UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/UserResolver.html" data-type="entity-link">UserResolver</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Proposal.html" data-type="entity-link">Proposal</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SwapItem.html" data-type="entity-link">SwapItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserInfo.html" data-type="entity-link">UserInfo</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});