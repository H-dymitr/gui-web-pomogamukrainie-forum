/**
 * Documentation for ads portal
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
  HttpEvent,
  HttpParameterCodec,
  HttpContext,
} from '@angular/common/http';
import { CustomHttpParameterCodec } from '../encoder';
import { Observable } from 'rxjs';

// @ts-ignore
import { AccommodationOffer } from '../model/accommodationOffer';
// @ts-ignore
import { AccommodationOfferDefinitionDTO } from '../model/accommodationOfferDefinitionDTO';
// @ts-ignore
import { OffersAccommodationOffer } from '../model/offersAccommodationOffer';
// @ts-ignore
import { Pageable } from '../model/pageable';

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';

@Injectable({
  providedIn: 'root',
})
export class AccommodationsResourceService {
  protected basePath = 'http://localhost:8080';
  public defaultHeaders = new HttpHeaders();
  public configuration = new Configuration();
  public encoder: HttpParameterCodec;

  constructor(
    protected httpClient: HttpClient,
    @Optional() @Inject(BASE_PATH) basePath: string,
    @Optional() configuration: Configuration
  ) {
    if (configuration) {
      this.configuration = configuration;
    }
    if (typeof this.configuration.basePath !== 'string') {
      if (typeof basePath !== 'string') {
        basePath = this.basePath;
      }
      this.configuration.basePath = basePath;
    }
    this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
  }

  private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
    if (typeof value === 'object' && value instanceof Date === false) {
      httpParams = this.addToHttpParamsRecursive(httpParams, value);
    } else {
      httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
    }
    return httpParams;
  }

  private addToHttpParamsRecursive(httpParams: HttpParams, value?: any, key?: string): HttpParams {
    if (value == null) {
      return httpParams;
    }

    if (typeof value === 'object') {
      if (Array.isArray(value)) {
        (value as any[]).forEach((elem) => (httpParams = this.addToHttpParamsRecursive(httpParams, elem, key)));
      } else if (value instanceof Date) {
        if (key != null) {
          httpParams = httpParams.append(key, (value as Date).toISOString().substr(0, 10));
        } else {
          throw Error('key may not be null if value is Date');
        }
      } else {
        Object.keys(value).forEach(
          (k) => (httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k))
        );
      }
    } else if (key != null) {
      httpParams = httpParams.append(key, value);
    } else {
      throw Error('key may not be null if value is not object or array');
    }
    return httpParams;
  }

  /**
   * @param accommodationOfferDefinitionDTO
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public createAccommodations(
    accommodationOfferDefinitionDTO: AccommodationOfferDefinitionDTO,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<AccommodationOffer>;
  public createAccommodations(
    accommodationOfferDefinitionDTO: AccommodationOfferDefinitionDTO,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<HttpResponse<AccommodationOffer>>;
  public createAccommodations(
    accommodationOfferDefinitionDTO: AccommodationOfferDefinitionDTO,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<HttpEvent<AccommodationOffer>>;
  public createAccommodations(
    accommodationOfferDefinitionDTO: AccommodationOfferDefinitionDTO,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<any> {
    if (accommodationOfferDefinitionDTO === null || accommodationOfferDefinitionDTO === undefined) {
      throw new Error(
        'Required parameter accommodationOfferDefinitionDTO was null or undefined when calling createAccommodations.'
      );
    }

    let localVarHeaders = this.defaultHeaders;

    let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json'];
      localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
    }

    let localVarHttpContext: HttpContext | undefined = options && options.context;
    if (localVarHttpContext === undefined) {
      localVarHttpContext = new HttpContext();
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];
    const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected !== undefined) {
      localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
    }

    let responseType_: 'text' | 'json' | 'blob' = 'json';
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
        responseType_ = 'text';
      } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
        responseType_ = 'json';
      } else {
        responseType_ = 'blob';
      }
    }

    return this.httpClient.post<AccommodationOffer>(
      `${this.configuration.basePath}/api/secure/accommodations`,
      accommodationOfferDefinitionDTO,
      {
        context: localVarHttpContext,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   * @param id
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public deleteAccommodations(
    id: number,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: undefined; context?: HttpContext }
  ): Observable<any>;
  public deleteAccommodations(
    id: number,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: undefined; context?: HttpContext }
  ): Observable<HttpResponse<any>>;
  public deleteAccommodations(
    id: number,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: undefined; context?: HttpContext }
  ): Observable<HttpEvent<any>>;
  public deleteAccommodations(
    id: number,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: undefined; context?: HttpContext }
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling deleteAccommodations.');
    }

    let localVarHeaders = this.defaultHeaders;

    let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = [];
      localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
    }

    let localVarHttpContext: HttpContext | undefined = options && options.context;
    if (localVarHttpContext === undefined) {
      localVarHttpContext = new HttpContext();
    }

    let responseType_: 'text' | 'json' | 'blob' = 'json';
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
        responseType_ = 'text';
      } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
        responseType_ = 'json';
      } else {
        responseType_ = 'blob';
      }
    }

    return this.httpClient.delete<any>(
      `${this.configuration.basePath}/api/secure/accommodations/${encodeURIComponent(String(id))}`,
      null,
      {
        context: localVarHttpContext,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   * @param id
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getAccommodations(
    id: number,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<AccommodationOffer>;
  public getAccommodations(
    id: number,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<HttpResponse<AccommodationOffer>>;
  public getAccommodations(
    id: number,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<HttpEvent<AccommodationOffer>>;
  public getAccommodations(
    id: number,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling getAccommodations.');
    }

    let localVarHeaders = this.defaultHeaders;

    let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json'];
      localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
    }

    let localVarHttpContext: HttpContext | undefined = options && options.context;
    if (localVarHttpContext === undefined) {
      localVarHttpContext = new HttpContext();
    }

    let responseType_: 'text' | 'json' | 'blob' = 'json';
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
        responseType_ = 'text';
      } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
        responseType_ = 'json';
      } else {
        responseType_ = 'blob';
      }
    }

    return this.httpClient.get<AccommodationOffer>(
      `${this.configuration.basePath}/api/accommodations/${encodeURIComponent(String(id))}`,
      {
        context: localVarHttpContext,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   * @param pageRequest
   * @param capacity
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public listAccommodations(
    pageRequest: Pageable,
    capacity?: number,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<OffersAccommodationOffer>;
  public listAccommodations(
    pageRequest: Pageable,
    capacity?: number,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<HttpResponse<OffersAccommodationOffer>>;
  public listAccommodations(
    pageRequest: Pageable,
    capacity?: number,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<HttpEvent<OffersAccommodationOffer>>;
  public listAccommodations(
    pageRequest: Pageable,
    capacity?: number,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<any> {
    if (pageRequest === null || pageRequest === undefined) {
      throw new Error('Required parameter pageRequest was null or undefined when calling listAccommodations.');
    }

    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    if (capacity !== undefined && capacity !== null) {
      localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, <any>capacity, 'capacity');
    }
    if (pageRequest !== undefined && pageRequest !== null) {
      localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, <any>pageRequest, 'pageRequest');
    }

    let localVarHeaders = this.defaultHeaders;

    let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json'];
      localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
    }

    let localVarHttpContext: HttpContext | undefined = options && options.context;
    if (localVarHttpContext === undefined) {
      localVarHttpContext = new HttpContext();
    }

    let responseType_: 'text' | 'json' | 'blob' = 'json';
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
        responseType_ = 'text';
      } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
        responseType_ = 'json';
      } else {
        responseType_ = 'blob';
      }
    }

    return this.httpClient.get<OffersAccommodationOffer>(`${this.configuration.basePath}/api/accommodations`, {
      context: localVarHttpContext,
      params: localVarQueryParameters,
      responseType: <any>responseType_,
      withCredentials: this.configuration.withCredentials,
      headers: localVarHeaders,
      observe: observe,
      reportProgress: reportProgress,
    });
  }

  /**
   * @param region
   * @param city
   * @param pageRequest
   * @param capacity
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public listByLocationAccommodations(
    region: string,
    city: string,
    pageRequest: Pageable,
    capacity?: number,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<OffersAccommodationOffer>;
  public listByLocationAccommodations(
    region: string,
    city: string,
    pageRequest: Pageable,
    capacity?: number,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<HttpResponse<OffersAccommodationOffer>>;
  public listByLocationAccommodations(
    region: string,
    city: string,
    pageRequest: Pageable,
    capacity?: number,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<HttpEvent<OffersAccommodationOffer>>;
  public listByLocationAccommodations(
    region: string,
    city: string,
    pageRequest: Pageable,
    capacity?: number,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<any> {
    if (region === null || region === undefined) {
      throw new Error('Required parameter region was null or undefined when calling listByLocationAccommodations.');
    }
    if (city === null || city === undefined) {
      throw new Error('Required parameter city was null or undefined when calling listByLocationAccommodations.');
    }
    if (pageRequest === null || pageRequest === undefined) {
      throw new Error(
        'Required parameter pageRequest was null or undefined when calling listByLocationAccommodations.'
      );
    }

    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    if (capacity !== undefined && capacity !== null) {
      localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, <any>capacity, 'capacity');
    }
    if (pageRequest !== undefined && pageRequest !== null) {
      localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, <any>pageRequest, 'pageRequest');
    }

    let localVarHeaders = this.defaultHeaders;

    let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json'];
      localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
    }

    let localVarHttpContext: HttpContext | undefined = options && options.context;
    if (localVarHttpContext === undefined) {
      localVarHttpContext = new HttpContext();
    }

    let responseType_: 'text' | 'json' | 'blob' = 'json';
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
        responseType_ = 'text';
      } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
        responseType_ = 'json';
      } else {
        responseType_ = 'blob';
      }
    }

    return this.httpClient.get<OffersAccommodationOffer>(
      `${this.configuration.basePath}/api/accommodations/${encodeURIComponent(String(region))}/${encodeURIComponent(
        String(city)
      )}`,
      {
        context: localVarHttpContext,
        params: localVarQueryParameters,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   * @param id
   * @param accommodationOfferDefinitionDTO
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public updateAccommodations(
    id: number,
    accommodationOfferDefinitionDTO: AccommodationOfferDefinitionDTO,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: undefined; context?: HttpContext }
  ): Observable<any>;
  public updateAccommodations(
    id: number,
    accommodationOfferDefinitionDTO: AccommodationOfferDefinitionDTO,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: undefined; context?: HttpContext }
  ): Observable<HttpResponse<any>>;
  public updateAccommodations(
    id: number,
    accommodationOfferDefinitionDTO: AccommodationOfferDefinitionDTO,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: undefined; context?: HttpContext }
  ): Observable<HttpEvent<any>>;
  public updateAccommodations(
    id: number,
    accommodationOfferDefinitionDTO: AccommodationOfferDefinitionDTO,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: undefined; context?: HttpContext }
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling updateAccommodations.');
    }
    if (accommodationOfferDefinitionDTO === null || accommodationOfferDefinitionDTO === undefined) {
      throw new Error(
        'Required parameter accommodationOfferDefinitionDTO was null or undefined when calling updateAccommodations.'
      );
    }

    let localVarHeaders = this.defaultHeaders;

    let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = [];
      localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
    }

    let localVarHttpContext: HttpContext | undefined = options && options.context;
    if (localVarHttpContext === undefined) {
      localVarHttpContext = new HttpContext();
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];
    const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected !== undefined) {
      localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
    }

    let responseType_: 'text' | 'json' | 'blob' = 'json';
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
        responseType_ = 'text';
      } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
        responseType_ = 'json';
      } else {
        responseType_ = 'blob';
      }
    }

    return this.httpClient.put<any>(
      `${this.configuration.basePath}/api/secure/accommodations/${encodeURIComponent(String(id))}`,
      accommodationOfferDefinitionDTO,
      {
        context: localVarHttpContext,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }
}
