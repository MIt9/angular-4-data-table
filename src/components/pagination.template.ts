export const PAGINATION_TEMPLATE = `
<div class="pagination-box">
    <div class="pagination-range">
        {{dataTable.translations.paginationRange}}:
        <span [textContent]="dataTable.offset + 1"></span>
        -
        <span [textContent]="[dataTable.offset + dataTable.limit , dataTable.itemCount] | min"></span>
        /
        <span [textContent]="dataTable.itemCount"></span>
    </div>
    <div class="pagination-controllers">
        <div class="pagination-limit">
            <div class="input-group">
                <span class="input-group-addon">{{dataTable.translations.paginationLimit}}:</span>
                <select class="form-control" [(ngModel)]="limit">
					          <option *ngFor="let l of limits" [value]="l">{{l}}</option>
			          </select>
            </div>
        </div>
        <div class=" pagination-pages">
            <button [disabled]="dataTable.offset <= 0" (click)="pageFirst()" class="btn btn-default pagination-firstpage">
                <i class="fa fa-angle-double-left" aria-hidden="true"></i>
			</button>
            <button [disabled]="dataTable.offset <= 0" (click)="pageBack()" class="btn btn-default pagination-prevpage">
            	<i class="fa fa-angle-left" aria-hidden="true"></i>
			</button>
            <div class="pagination-page">
                <div class="input-group">
                    <input #pageInput type="number" class="form-control" min="1" step="1" max="{{maxPage}}"
                           [ngModel]="page" (blur)="page = pageInput.value"
                           (keyup.enter)="page = pageInput.value" (keyup.esc)="pageInput.value = page"/>
                    <div class="input-group-addon">
                        <span>/</span>
                        <span [textContent]="dataTable.lastPage"></span>
                    </div>
                </div>
            </div>
            <button [disabled]="(dataTable.offset + dataTable.limit) >= dataTable.itemCount" (click)="pageForward()" class="btn btn-default pagination-nextpage">
            	<i class="fa fa-angle-right" aria-hidden="true"></i>
			</button>
            <button [disabled]="(dataTable.offset + dataTable.limit) >= dataTable.itemCount" (click)="pageLast()" class="btn btn-default pagination-lastpage">
                <i class="fa fa-angle-double-right" aria-hidden="true"></i>
			</button>
        </div>
    </div>
</div>
`;
