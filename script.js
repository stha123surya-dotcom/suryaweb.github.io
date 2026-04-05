<div class="app-shell">
        <header class="app-header">
            <div class="brand">
                <i data-lucide="layers"></i>
                <span>BuildEst <b>Pro</b></span>
            </div>
            <button class="print-btn" onclick="window.print()">
                <i data-lucide="download"></i> PDF
            </button>
        </header>

        <div class="folder-tab-head">
            <div class="tab-label active">
                <i data-lucide="file-text"></i> Project Estimate
            </div>
        </div>

        <main class="folder-body">
            
            <section class="card-section">
                <h3 class="section-title">Project Specifications</h3>
                <div class="input-grid">
                    <div class="input-group">
                        <label>Total Area (sq. ft)</label>
                        <input type="number" id="area" value="1000" oninput="calculateAll()">
                    </div>
                    <div class="input-group">
                        <label>Construction Tier</label>
                        <select id="quality" onchange="calculateAll()">
                            <option value="1">Economy</option>
                            <option value="1.2" selected>Standard</option>
                            <option value="1.5">Premium / Luxury</option>
                        </select>
                    </div>
                </div>
            </section>

            <div class="stats-scroll">
                <div class="mini-card accent-blue">
                    <span class="label">Cement</span>
                    <div class="value" id="valCement">0</div>
                    <span class="unit">Bags</span>
                </div>
                <div class="mini-card accent-orange">
                    <span class="label">Sand</span>
                    <div class="value" id="valSand">0</div>
                    <span class="unit">ft³</span>
                </div>
                <div class="mini-card accent-slate">
                    <span class="label">Aggregate</span>
                    <div class="value" id="valAggregate">0</div>
                    <span class="unit">ft³</span>
                </div>
                <div class="mini-card accent-red">
                    <span class="label">Steel</span>
                    <div class="value" id="valSteel">0</div>
                    <span class="unit">Kg</span>
                </div>
            </div>

            <section class="card-section no-padding">
                <div class="grand-total-banner">
                    <label>Grand Estimated Total</label>
                    <h2 id="grandTotalDisplay">Rs. 0</h2>
                </div>
                
                <div class="table-responsive">
                    <table class="app-table">
                        <thead>
                            <tr>
                                <th>Item Description</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody id="tableBody">
                            </tbody>
                    </table>
                </div>
            </section>

        </main>

        <nav class="bottom-nav">
            <div class="nav-item active"><i data-lucide="home"></i><span>Home</span></div>
            <div class="nav-item"><i data-lucide="history"></i><span>History</span></div>
            <div class="nav-item" onclick="alert('Settings feature coming soon!')"><i data-lucide="settings"></i><span>Rates</span></div>
        </nav>
    </div>