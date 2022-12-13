let navBar = document.getElementById('navBar');
navBar.innerHTML = `<div class="navBarSection">
                    <div class="navMenu">
                        <!-- Blog Menu  -->
                        <a href="index.html" class="singleMenu dashboard btnDashboard">Dashboard</a>
                        <nav class="multipleMenu blog">
                            <button class="btnMultiple">Blog</button>
                            <nav class="manuExpand">
                                <a href="b_add.html" class="singleMenu add_b">Add</a>
                                <a href="b_browseAll.html" class="singleMenu BrowseAll_b">Browse All</a>
                                <a href="b_catagory.html" class="singleMenu btnCatagory_b">Catagory</a>
                            </nav>
                        </nav>
                        <!-- Magazine Menu  -->
                        <nav class="multipleMenu magazine">
                            <button class="btnMultiple">Magazine</button>
                            <nav class="manuExpand">
                                <a href="m_add.html" class="singleMenu add_m">Add</a>
                                <a href="m_browseAll.html" class="singleMenu browseAll_m">Browse All</a>
                                <a href="m_catagory.html" class="singleMenu btnCatagory_m">Catagory</a>
                            </nav>
                        </nav>
                        <!-- Inspiring Menu  -->
                        <nav class="multipleMenu inspiring">
                            <button class="btnMultiple">Inspiring</button>
                            <nav class="manuExpand">
                                <a href="i_add.html" class="singleMenu add_i">Add</a>
                                <a href="i_browseAll.html" class="singleMenu browseAll_i">Browse All</a>
                                <a href="i_catagory.html" class="singleMenu btnCatagory btnCatagory_i">Catagory</a>
                            </nav>
                        </nav>
                        <!-- Counselling Menu  -->
                        <nav class="multipleMenu counselling">
                            <button class="btnMultiple">Counselling</button>
                            <nav class="manuExpand">
                                <a href="c_add.html" class="singleMenu add_c">Add</a>
                                <a href="c_browseAll.html" class="singleMenu browesAll_c">Browse All</a>
                                <a href="c_catagory.html" class="singleMenu btnCatagory_c">Catagory</a>
                            </nav>
                        </nav>
                        <!-- Footer News Menu  -->
                        <nav class="multipleMenu news">
                            <button class="btnMultiple">News</button>
                            <nav class="manuExpand">
                                <a href="n_add.html" class="singleMenu add_n">Add</a>
                                <a href="n_browseAll.html" class="singleMenu browseAll_n">Browse All</a>
                                <a href="n_catagory.html" class="singleMenu btnCatagory_n">Catagory</a>
                            </nav>
                        </nav>
                    </div>

                    <div class="menuIcon2">
                        <div class="tapClose">
                            <i class="fa-solid fa-xmark"></i>
                        </div>
                    </div>
                </div>`;